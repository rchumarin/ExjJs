package service.impl;

import model.Tender;
import model.dao.TenderDao;
import org.springframework.transaction.annotation.Transactional;
import service.TenderService;

import java.util.Collection;
import java.util.List;

public class TenderServiceImpl implements TenderService {

    private TenderDao tenderDao;

    public TenderDao getTenderDao() {
        return tenderDao;
    }

    public void setTenderDao(TenderDao tenderDao) {
        this.tenderDao = tenderDao;
    }

    @Transactional
    @Override
    public Boolean add(Tender tender) {
        List<Tender> duplicate = tenderDao.findByTender(tender.getCompany(), tender.getName_tender(),
                                                        tender.getCost(), tender.getDeadline(),
                                                        tender.getKeyword(), tender.getUrl_tender(),
                                                        tender.getId_tender());
        if (duplicate.isEmpty()) {
            tenderDao.add(tender);
            return true;
        }
        return false;
    }

    @Transactional
    @Override
    public void update(Tender tender) {
        tenderDao.update(tender);
    }

    @Transactional
    @Override
    public Collection<Tender> getTenders(String search) {
        return tenderDao.getTenders(search);
    }

    @Transactional
    @Override
    public void delete(Tender tender) {
        tenderDao.delete(tender);
    }

}
