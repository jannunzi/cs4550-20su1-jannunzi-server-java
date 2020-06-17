package com.example.cs455020su1jannunziserverjava.models;

import javax.persistence.*;

@Entity
@Table(name="reviews")
@IdClass(ReviewId.class)
public class Review {
    @Id
    private long userId;
    @Id
    private long sectionId;
    private String title;
    private String review;
    private Integer stars;

    @ManyToOne
    @PrimaryKeyJoinColumn(name="user", referencedColumnName="ID")
    private User user;

    @ManyToOne
    @PrimaryKeyJoinColumn(name="section", referencedColumnName="ID")
    private Section section;
}
