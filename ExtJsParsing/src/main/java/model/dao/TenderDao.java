package model.dao;

import model.Tender;
import java.util.Collection;
import java.util.List;

public interface TenderDao {

    void add(Tender tender);

    void update(Tender tender);

    void delete(Tender tender);

    Collection<Tender> getTenders(String search);

    public List findByTender(String company, String name_tender, 
                            Long cost, String deadline, String keyword, 
                            String url_tender, String id_tender);

}
