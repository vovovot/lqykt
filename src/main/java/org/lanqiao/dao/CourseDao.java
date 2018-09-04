package org.lanqiao.dao;

import org.lanqiao.entity.Course;
import org.lanqiao.entity.CourseKind;

import java.util.List;

public interface CourseDao{
    public List<Course> ShowBestCourse();
    public List<Course> ShowFreeCourse();
    public List<Course> ShowNewCourse();
    public List<Course> ShowPrompt(String str);
    public int AddCourse(String cname,String comp,int price,int kindid);
    //删除
    public int delete(Course c);
    //查询二级标题课程
    public List<Course> select(CourseKind ck) ;
    //查询一级标题课程
    public List<Course> selectAll(CourseKind ck) ;
    // 查询三级标题课程
    public List<Course> selectSignle(CourseKind ck, int pageBegin, int pageSize) ;

}
