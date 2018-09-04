package org.lanqiao.dao;



import org.lanqiao.entity.User;

import java.util.List;

public class UserDaoImpl extends BaseDao<User> implements UserDao {
    public List<User> checkUsers(User user) {
        return executeQuery("select user_id,user_phone,user_name,user_pwd from user where user_phone=? and user_pwd=?", new Object[]{user.getUser_phone(), user.getUser_pwd()});
    }
    public int addUser(User user) {
        return executeUpdate("insert into user(user_phone,user_pwd,user_name) values(?,?,?)", new Object[]{user.getUser_phone(), user.getUser_pwd(),"lanqiao"+user.getUser_phone()});
    }
    public List<User> select(User user)
    {
        return executeQuery("select user_phone from user where user_phone=?",new Object[]{user.getUser_phone()});
    }
}
