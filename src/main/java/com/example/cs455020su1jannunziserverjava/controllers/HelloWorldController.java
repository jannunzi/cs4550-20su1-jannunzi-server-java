package com.example.cs455020su1jannunziserverjava.controllers;

import com.example.cs455020su1jannunziserverjava.models.HelloModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @GetMapping("/api/hello/{message}")
    public HelloModel sayHello(
            @PathVariable("message") String msg) {
        // does some work
        HelloModel hello = new HelloModel(msg, 123);
        return hello;
    }
}
