package com.example.cs455020su1jannunziserverjava.models;

public class HelloModel {
    private String message;
    private int id;

    public HelloModel(String message, int id) {
        this.message = message;
        this.id = id;
    }

    public HelloModel() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
