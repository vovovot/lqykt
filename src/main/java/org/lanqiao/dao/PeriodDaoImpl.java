package org.lanqiao.dao;

import org.lanqiao.entity.Period;

public class PeriodDaoImpl extends BaseDao<Period> implements PeriodDao{
    @Override
    public int AddPeriod(int cid,int pid,String pname) {
        return executeUpdate("insert into period(course_id,period_id,period_name) values(?,?,?);",new Object[]{cid,pid,pname});
    }
}
