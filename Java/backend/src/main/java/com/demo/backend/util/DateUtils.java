package com.demo.backend.util;

import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class DateUtils {
    private static SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");

    public String todayString() {
        return simpleDateFormat.format(new Date());
    }
}
