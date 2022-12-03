package com.codemobiles.stock_backend.util;

import java.text.SimpleDateFormat;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;


//@Configuration
//@Scope("prototype")
public class DateUtil {
	public static SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyy"); 
	
	public DateUtil() {
		System.out.println("object created");
	}
	
//	@Bean
//	public String todayString() {
//		return simpleDateFormat.format(new Date());
//	}
	
	@PostConstruct
	public void init () throws Exception{
		System.out.println("object init");
	}
	
	@PreDestroy
	public void destroy() throws Exception{
		System.out.println("object destroy");
	}
}
