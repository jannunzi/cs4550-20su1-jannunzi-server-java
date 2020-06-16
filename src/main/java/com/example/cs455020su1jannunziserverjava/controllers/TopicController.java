package com.example.cs455020su1jannunziserverjava.controllers;

import com.example.cs455020su1jannunziserverjava.models.Topic;
import com.example.cs455020su1jannunziserverjava.services.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TopicController {
    @Autowired
    TopicService service;
    public void createTopic() {}
    public void deleteTopic() {}
    public void updateTopic() {}

    @GetMapping("/api/topics")
    public List<Topic> findAllTopics() {
        return service.findAllTopics();
    }

    @GetMapping("/api/topics/{topicId}")
    public Topic findTopicById(
            @PathVariable("topicId") Integer tid) {
        return service.findTopicById(tid);
    }

    @GetMapping("/api/lessons/{lessonId}/topics")
    public List<Topic> findTopicsForLesson(
            @PathVariable("lessonId") String lessonId) {
        return service.findTopicsForLesson(lessonId);
    }
}
