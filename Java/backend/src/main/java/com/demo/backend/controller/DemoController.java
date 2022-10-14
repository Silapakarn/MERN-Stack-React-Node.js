package com.demo.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.backend.util.DateUtils;

@RestController
public class DemoController {

    @Autowired
    DateUtils dateUtils;

    // test
    @GetMapping("/")
    String getToday() {
        return dateUtils.todayString();
    }
}
