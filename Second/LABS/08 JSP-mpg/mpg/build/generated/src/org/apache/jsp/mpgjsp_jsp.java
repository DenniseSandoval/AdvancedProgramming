package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.ArrayList;
import ec.edu.espe.mpg.model.mpg;
import ec.edu.espe.mpg.model.mpgDAO;

public final class mpgjsp_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html>\n");
      out.write("    <head>\n");
      out.write("        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
      out.write("        <title>JSP Page</title>\n");
      out.write("    </head>\n");
      out.write("    <body>\n");
      out.write("\n");
      out.write("        <div class=\"container\">\n");
      out.write("            <table  class=\"table table-bordered\"  id=\"tablaDatos\">\n");
      out.write("                <tr>\n");
      out.write("                    <th class=\"text-center\">Carro</th>\n");
      out.write("                    <th class=\"text-center\">Millas</th>\n");
      out.write("                    <th class=\"text-center\">Galones</th>\n");
      out.write("                   \n");
      out.write("                </tr>\n");
      out.write("                ");
mpgDAO dao=new mpgDAO();
                ArrayList<mpg> guia=dao.getServices();
                for(mpg guide: guia ){ 
      out.write("\n");
      out.write("         <tr>\n");
      out.write("                    <td class=\"text-center\">");
      out.print(guide.getCar());
      out.write("</td>\n");
      out.write("                    <td class=\"text-center\">");
      out.print(guide.getMiles());
      out.write("</td>\n");
      out.write("                    <td class=\"text-center\">");
      out.print(guide.getGallon());
      out.write("</td>\n");
      out.write("                    <td class=\"text-center\">");
      out.print(guide.getTotal());
      out.write("</td>\n");
      out.write("                   \n");
      out.write("                </tr>\n");
      out.write("                ");
}
                
      out.write("\n");
      out.write("            </table>\n");
      out.write("        </div>\n");
      out.write("</html>");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
