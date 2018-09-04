package org.lanqiao.dao;

import org.lanqiao.entity.Course;

import java.util.List;

public interface CourseDao{
    public List<Course> ShowBestCourse();
    public List<Course> ShowFreeCourse();
    public List<Course> ShowNewCourse();
    public List<Course> ShowPrompt(String str);
    public int AddCourse(String cname,String comp,int price,int kindid);
}
