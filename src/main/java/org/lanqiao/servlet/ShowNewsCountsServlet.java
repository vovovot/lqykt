package org.lanqiao.servlet;

import net.sf.json.JSONArray;
import org.lanqiao.dao.NewsDao;
import org.lanqiao.dao.NewsDaoImpl;
import org.lanqiao.entity.News;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet("/ShowNewsCountsServlet")
public class ShowNewsCountsServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        NewsDao news = new NewsDaoImpl();//用ShowNewsNum方法
        int i = Integer.parseInt(request.getParameter("userid"));
        int i0 = news.ShowNewsNum(i);
        PrintWriter out=response.getWriter();
        out.print(i0);
        out.flush();
        out.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
