package com.demo.backend.util;

import org.springframework.context.annotation.Bean;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.annotation.PostConstruct;

// @Configuration
// @Scope("prototype")
public class DateUtils {
    private static SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");

    public DateUtils() {
        System.out.println("object created");
    }

    @Bean
    public String todayString() {
        return simpleDateFormat.format(new Date());
    }

    @PostConstruct
    public void init() throws Exception {
        System.out.println("object init");
    }
}
