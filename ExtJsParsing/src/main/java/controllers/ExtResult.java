package controllers;

import model.Tender;

public class ExtResult {
    private boolean success;
    private Tender data;


    public ExtResult(boolean success, Tender data) {
        this.success = success;
        this.data = data;
    }

    public ExtResult() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Tender getData() {
        return data;
    }

    public void setData(Tender data) {
        this.data = data;
    }
}
