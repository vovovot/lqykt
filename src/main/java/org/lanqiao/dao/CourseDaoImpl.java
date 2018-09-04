package org.lanqiao.dao;

import org.lanqiao.entity.Course;

import java.util.List;

public class CourseDaoImpl extends BaseDao<Course> implements  CourseDao{

    @Override
    public List<Course> ShowBestCourse() {
        return executeQuery("select course_id,course_name,company,page_view,cover from course order by page_view desc");
    }

    @Override
    public List<Course> ShowFreeCourse() {
        return executeQuery("select course_id,course_name,company,page_view from course where price = 0 order by page_view desc");
    }

    @Override
    public List<Course> ShowNewCourse() {
        return executeQuery("select course_id,course_name,company,page_view from course order by putway_time desc");
    }

    @Override
    public List<Course> ShowPrompt(String val) {
        return executeQuery("select * from course where course_name like '%"+val+"%' order by page_view desc");
    }

    @Override
    public int AddCourse(String cname, String comp, int price, int kindid) {
        return executeUpdate("insert into course(course_name,company,price,kind_id) VALUES(?,?,?,?)",new Object[]{cname,comp,price,kindid});
    }

}
