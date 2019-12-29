/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.school.services;

import ec.edu.espe.school.model.product;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author DenniseSandoval
 */
@Path("allproducts")
public class AllproductsResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of AllproductsResource
     */
    public AllproductsResource() {
    }

    /**
     * Retrieves representation of an instance of ec.edu.espe.school.services.AllproductsResource
     * @return an instance of ec.edu.espe.school.model.product
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList showAllProducts() throws SQLException {
        DBCconnect connect = new DBCconnect();
        String query;
        query = "SELECT * from products";
        PreparedStatement state = connect.connect().prepareStatement(query);
        ResultSet rs = state.executeQuery();
        product tempProduct;
        ArrayList<product> producto = new ArrayList();
        while (rs.next()) {
            tempProduct = new product(rs.getString("id"), rs.getString("name"), rs.getString("description"), rs.getInt("quantity"), rs.getFloat("price"));
            producto.add(tempProduct);

        }
        rs.close();
        state.close();
        return producto;

    }
    /**
     * PUT method for updating or creating an instance of AllproductsResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(product content) {
    }
}
