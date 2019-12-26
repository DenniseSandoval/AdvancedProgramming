<%-- 
    Document   : mpgjsp
    Created on : Dec 4, 2019, 12:52:17 PM
    Author     : DenniseSandoval
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="ec.edu.espe.mpg.model.mpg"%>
<%@page import="ec.edu.espe.mpg.model.mpgDAO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>

        <div class="container">
            <br>
            <center>
                <h2>Calculo millas por galon</h2><br>
            </center>
            
            <table  class="table "  id="tablaDatos">
                <tr>
                    <th class="text-center table-info">Carro</th>
                    <th class="text-center table-info">Millas</th>
                    <th class="text-center table-info">Galones</th>
                    <th class="text-center table-info">Total</th>
                   
                </tr>
                <%mpgDAO dao=new mpgDAO();
                ArrayList<mpg> guia=dao.getServices();
                for(mpg guide: guia ){ %>
         <tr>
                    <td class="text-center"><%=guide.getCar()%></td>
                    <td class="text-center"><%=guide.getMiles()%></td>
                    <td class="text-center"><%=guide.getGallon()%></td>
                    <td class="text-center"><%=guide.getTotal()%></td>
                   
                </tr>
                <%}
                %>
            </table>
        </div>
</html>