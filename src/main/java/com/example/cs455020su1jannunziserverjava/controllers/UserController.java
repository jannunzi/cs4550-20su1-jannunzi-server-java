package com.example.cs455020su1jannunziserverjava.controllers;

import com.example.cs455020su1jannunziserverjava.models.User;
import com.example.cs455020su1jannunziserverjava.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(
        origins = "http://localhost:3000",
        allowCredentials = "true")
public class UserController {
    @Autowired
    UserService service;

    @PostMapping("/api/register")
    public User register(
            @RequestBody User user,
            HttpSession session) {
        User currentUser = service.createUser(user);
        session.setAttribute("currentUser", currentUser);
        return currentUser;
    }

    @PostMapping("/api/login")
    public User login(
            @RequestBody User user,
            HttpSession session) {
        User currentUser = service.findUserByCredentials(user.getUsername(), user.getPassword());
        session.setAttribute("currentUser", currentUser);
        return currentUser;
    }

    @PostMapping("/api/profile")
    public User profile(HttpSession session) {
        User currentUser = (User)session.getAttribute("currentUser");
        return currentUser;
    }

    @PostMapping("/api/logout")
    public void logout(HttpSession session) {
        session.invalidate();
    }
}
