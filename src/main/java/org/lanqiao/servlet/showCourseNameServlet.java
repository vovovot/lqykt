package org.lanqiao.servlet;

import net.sf.json.JSONArray;
import org.lanqiao.dao.OrderDaoImpl;
import org.lanqiao.entity.Order;
import org.lanqiao.entity.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet("/showCourseNameServlet")
public class showCourseNameServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String user_id= request.getParameter("user_id");
        User u = new User();
        u.setUser_id(Integer.parseInt(user_id));
        OrderDaoImpl order = new OrderDaoImpl();
        List<Order> orderList  = order.showCourseName(u);
        JSONArray  jsonObject = JSONArray.fromObject(orderList);
        PrintWriter out = response.getWriter();
        out.print(jsonObject);
        out.flush();
        out.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
