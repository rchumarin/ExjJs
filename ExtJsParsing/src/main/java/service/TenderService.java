package service;

import model.Tender;

import java.util.Collection;

public interface TenderService {

    Boolean add(Tender tender);

    void update(Tender tender);

    Collection<Tender> getTenders(String search);

    void delete(Tender tender);

}
