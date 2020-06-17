package com.example.cs455020su1jannunziserverjava.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="sections")
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    public String title;

    @ManyToMany
    @JsonIgnore
    public List<User> students;

    @OneToMany(mappedBy="section")
    private List<Review> reviewers;

    public List<Review> getReviewers() {
        return reviewers;
    }

    public void setReviewers(List<Review> reviewers) {
        this.reviewers = reviewers;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<User> getStudents() {
        return students;
    }

    public void setStudents(List<User> students) {
        this.students = students;
    }
}
