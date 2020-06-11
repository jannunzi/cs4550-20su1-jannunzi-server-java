package com.example.cs455020su1jannunziserverjava.repositories;

import com.example.cs455020su1jannunziserverjava.models.Topic;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface TopicRepository
    extends CrudRepository<Topic, Integer> {

    @Query("SELECT topic FROM Topic topic")
    public List<Topic> findAllTopics();

    @Query("SELECT topic FROM Topic topic WHERE topic.id=:topicId")
    public Topic findTopicById(
            @Param("topicId") Integer tid);

    @Query("SELECT topic FROM Topic topic WHERE topic.lesson = :lessonId")
    List<Topic> findTopicsForLesson(
            @Param("lessonId") String lessonId);
}
