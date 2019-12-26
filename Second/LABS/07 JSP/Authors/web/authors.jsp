<%-- 
    Document   : authors
    Created on : Dec 2, 2019, 1:28:43 PM
    Author     : DenniseSandoval
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Authors</title>
    </head>
    <body>
        <h1>authors</h1>
        <div>
            <h3>Choose a sport:</h3>
            <form method="get">
                <input type="checkbox" name="author" value="Soccer">Futbol</br>
                <input type="checkbox" name="author" value="Basketball">Basquet</br>
                <input type="checkbox" name="author" value="Baseball">Beisbol</br>
                <input type="submit" value="Save Authors">
            </form>
            <%
                String[] authors = request.getParameterValues("author");
                if (authors != null) {
            %>
            <h3>You have selected author(s):</h3>
            <ol>
                <%
                    for (int i = 0; i < authors.length; ++i) {
                %>
                <li><%= authors[i]%></li>
                    <%
                        }
                    %>
            </ol>
            <a href="<%=request.getRequestURI()%>">BACK</a>
            <%
                }
            %>
        </div>
    </body>
</html>
