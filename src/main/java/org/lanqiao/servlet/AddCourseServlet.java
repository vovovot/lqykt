package org.lanqiao.servlet;

import org.lanqiao.dao.CourseDao;
import org.lanqiao.dao.CourseDaoImpl;
import org.lanqiao.entity.Course;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet("/AddCourseServlet")
public class AddCourseServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String cname = request.getParameter("coursename");
        String comp = request.getParameter("company");
        int price = Integer.parseInt(request.getParameter("price"));
        int kindid = Integer.parseInt(request.getParameter("kindid"));
        CourseDao courseDao = new CourseDaoImpl();
        int ret = courseDao.AddCourse(cname,comp,price,kindid);
        PrintWriter out=response.getWriter();
        out.print(ret);
        out.flush();
        out.close();
    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
