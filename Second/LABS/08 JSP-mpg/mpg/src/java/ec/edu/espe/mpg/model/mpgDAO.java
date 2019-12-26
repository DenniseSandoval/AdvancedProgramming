/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.mpg.model;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author DenniseSandoval
 */
public class mpgDAO {
    DBConnect con;

    public mpgDAO() {
        con = new DBConnect();
    }
    public ArrayList<mpg> getServices() throws IOException {
        ArrayList<mpg> services = null;
        try {
            String url = "http://localhost:1024/mpg/webresources/mpg/showallmpg";
            URL obj = new URL(url);
            HttpURLConnection con = (HttpURLConnection) obj.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("User-Agent", "Mozilla/5.0");
            int responseCode = con.getResponseCode();
            System.out.println("\nSending 'GET' request to URL : " + url);
            System.out.println("Response Code : " + responseCode);
            Type tipoListaServicios = new TypeToken<List<mpg>>() {
            }.getType();
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();
            services =new Gson().fromJson(response.toString(), tipoListaServicios);
      } catch (MalformedURLException ex) {
            Logger.getLogger(mpgDAO.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ProtocolException ex) {
            Logger.getLogger(mpgDAO.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(mpgDAO.class.getName()).log(Level.SEVERE, null, ex);
        }

        return services;
    }
    public ArrayList<mpg> showAllMpg() throws SQLException {
        DBConnect connect = new DBConnect();
        String query;
        query = "SELECT * from dates";
        PreparedStatement state = connect.connect().prepareStatement(query);
        ResultSet rs = state.executeQuery();
        mpg tempMpg;
        ArrayList<mpg> mpg = new ArrayList();
        double total=0, gallons=0;
        while (rs.next()) {
            tempMpg = new mpg(rs.getString("car"), rs.getDouble("miles"), rs.getDouble("gallon"));
            total=rs.getDouble("miles")/rs.getDouble("gallon");
            tempMpg.setTotal(total);
            mpg.add(tempMpg);   
        }
        return mpg;
    }
}
