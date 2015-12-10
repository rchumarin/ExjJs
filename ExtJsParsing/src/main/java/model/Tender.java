package model;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.io.Serializable;

@Entity
@Table(name = "tenders")
public class Tender implements Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "company")
    private String company;
    
    @Column(name = "name_tender")
    private String name_tender;        

    @Column(name = "cost")
    private Long cost;
    
    @Column(name = "deadline")
    private String deadline;
    
    @Column(name = "keyword")
    private String keyword;

    @Column(name = "url_tender")
    private String url_tender;

    @Column(name = "id_tender")
    private String id_tender;
    
    public Tender() {
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getCompany() {
        return company;
    }
    public void setCompany(String company) {
        this.company = company;
    }

    public String getName_tender() {
        return name_tender;
    }
    public void setName_tender(String name_tender) {
        this.name_tender = name_tender;
    }

    public Long getCost() {
        return cost;
    }
    public void setCost(Long cost) {
        this.cost = cost;
    }

    public String getDeadline() {
        return deadline;
    }
    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getKeyword() {
        return keyword;
    }
    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public String getUrl_tender() {
        return url_tender;
    }
    public void setUrl_tender(String url_tender) {
        this.url_tender = url_tender;
    }

    public String getId_tender() {
        return id_tender;
    }
    public void setId_tender(String id_tender) {
        this.id_tender = id_tender;
    }
    
    
    
    
    
    
    
}
