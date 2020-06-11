package com.example.cs455020su1jannunziserverjava.services;

import com.example.cs455020su1jannunziserverjava.models.Topic;
import com.example.cs455020su1jannunziserverjava.repositories.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TopicService {
    @Autowired
    TopicRepository repository;

    public void createTopic() {}
    public void deleteTopic() {}
    public List<Topic> findAllTopics() {
        return repository.findAllTopics();
//        return (List<Topic>)repository.findAll();
    }

    public Topic findTopicById(Integer tid) {
        return repository.findTopicById(tid);
//        Optional<Topic> optional = repository.findById(tid);
//        if(optional.isPresent()) {
//            return optional.get();
//        }
//        return null;
    }

    public List<Topic> findTopicsForLesson(String lessonId) {
        return repository.findTopicsForLesson(lessonId);
    }
}
