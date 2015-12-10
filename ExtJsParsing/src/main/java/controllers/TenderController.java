package controllers;

import model.Tender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.TenderService;
import java.util.Collection;

/*
Создадим контролер, который будет замапен на адрес /tender для обработки запросов с клиента;
Каждый метод замапен на соответствующий запрос с клиента. 
Внедряем зависимость с помощью spring аннотации @Autowired и вызываем соответствующие методы у сервиса;
ExtResult — вспомогательный класс. Используется для ответа клиенту, 
что сущность, которую пытаемся записать в БД, дубликат или не дубликат;
 */

@Controller
@RequestMapping("/tender")
public class TenderController {

    @Autowired
    private TenderService tenderService;


    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Collection<Tender> getTenders(String search) {
        return tenderService.getTenders(search);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ExtResult setTender(@RequestBody Tender tender) {
        return new ExtResult(tenderService.add(tender), tender);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteTender(@RequestBody Tender tender) {
        tenderService.delete(tender);
        return "delete";
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    @ResponseBody
    public String updateTender(@RequestBody Tender tender) {
        tenderService.update(tender);
        return "update";
    }
}
