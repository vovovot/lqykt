package org.lanqiao.dao;

import org.lanqiao.entity.Order;
import org.lanqiao.entity.User;

import java.util.List;

public interface OrderDao {

    //删除
    public int delete(int id);

    //查询
    public List<Order> select(String key) ;

    List<Order> showCourseName(User user);
}
