package com.example.cs455020su1jannunziserverjava.services;

import com.example.cs455020su1jannunziserverjava.models.User;
import com.example.cs455020su1jannunziserverjava.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository repository;
    public User createUser(User user) {
        return repository.save(user);
    }
    public User findUserById(Integer id) {
        return repository.findUserById(id);
    }

    public User findUserByCredentials(String username, String password) {
        return repository.findUserByCredentials(username, password);
    }
}
