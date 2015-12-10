package model.dao.impl;

import model.Tender;
import model.dao.TenderDao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;
import java.util.List;

/*
Метод getTenders(String search) принимает значение поля 
поиска и если пусто — вернет все данные;
Метод findByTender(String company, Long cost) используется для 
поиска дубликата при добавлении данных;
 */
public class TenderDaoImpl implements TenderDao {

    @PersistenceContext
    private EntityManager emf;

    @Override
    public void add(Tender tender) {
        emf.persist(tender);
    }

    @Override
    public void update(Tender tender) {
        emf.merge(tender);
    }

    @Override
    public void delete(Tender tender) {
        emf.remove(emf.getReference(Tender.class, tender.getId()));
    }

    @Override
    public Collection<Tender> getTenders(String search) {
        if (null == search || search.trim().isEmpty()) {
            return emf.createQuery(
                    "select t from Tender t")
                    .getResultList();
        }
        return emf.createQuery(                                  
//                "select c from Tender c where lower(c.company) like lower(:search)")
                "select t from Tender t where t.keyword like :search")
                .setParameter("search", search.trim() + "%")
                .getResultList();
    }

    public List<Tender> findByTender(String company, String name_tender, 
                                    Long cost, String deadline, String keyword, 
                                    String url_tender, String id_tender){
        return emf.createQuery(
                "select t from Tender t where t.company = :company and t.name_tender = :name_tender"
                        + "and t.cost = :cost and t.deadline = :deadline"
                        + "and t.keyword = :keyword and t.url_tender = :url_tender"
                        + "and t.id_tender = :id_tender")
                .setParameter("company", company)
                .setParameter("name_tender", name_tender)
                .setParameter("cost", cost)
                .setParameter("deadline", deadline)                
                .setParameter("keyword", keyword)
                .setParameter("url_tender", url_tender)
                .setParameter("id_tender", id_tender)                
                .getResultList();
    }
}
