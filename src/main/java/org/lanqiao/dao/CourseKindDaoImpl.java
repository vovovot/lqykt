package org.lanqiao.dao;

import org.lanqiao.entity.CourseKind;

import java.util.List;

public class CourseKindDaoImpl extends  BaseDao<CourseKind> implements CourseKindDao{
    @Override
    public List<CourseKind> GetKindName(int i) {
        return executeQuery("select kind_name from coursekind where kind_id =?",new Object[]{i});
    }

    @Override
    public List<CourseKind> CheckCourseId(String kindname) {
        return executeQuery("select * from coursekind where kind_name = '"+kindname+"'");
    }
}
