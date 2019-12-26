/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.mpg.services;

import ec.edu.espe.mpg.model.mpg;
import ec.edu.espe.mpg.model.mpgDAO;
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
@Path("mpg")
public class MpgResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of MpgResource
     */
    public MpgResource() {
    }

    /**
     * Retrieves representation of an instance of ec.edu.espe.mpg.services.MpgResource
     * @return an instance of ec.edu.espe.mpg.model.mpg
     */
    @Path("/showallmpg")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<mpg> getGuide() throws SQLException {
        mpgDAO mpg = new mpgDAO();
        ArrayList<mpg> objMpg=new ArrayList<mpg>();
        objMpg = mpg.showAllMpg();
        return objMpg;
    }

    /**
     * PUT method for updating or creating an instance of MpgResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(mpg content) {
    }
}
