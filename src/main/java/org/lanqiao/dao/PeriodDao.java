package org.lanqiao.dao;

import org.lanqiao.entity.Period;

import java.util.List;

public interface PeriodDao {
    public int AddPeriod(int cid,int pid,String pname);
    //删除
    public int delete(Period p);
    //查询
    public List<Period> select(Period p) ;
}
