package com.codemobiles.stock_backend.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

import com.codemobiles.stock_backend.util.DateUtil;



//@RestController
public class DemoController {
		
		@Autowired
		DateUtil dateUtis;
		private SayService sayService;
	
		DemoController(DateUtil dateUtis, @Qualifier("catRock") SayService sayService){
			this.dateUtis = dateUtis;
			this.sayService = sayService;
			
		}
		

		@GetMapping("/say")
		String say() {
//			DemoController demo = new DemoController();
			return sayService.say();
		}	
}


interface SayService{
	String say();
}

@Component("catRock")
class Cat implements SayService{

	@Override
	public String say() {
		// TODO Auto-generated method stub
		return "mewoooo~";
	}
}


@Component
class Dog implements SayService{

	@Override
	public String say() {
		// TODO Auto-generated method stub
		return "Bowwwwwww~";
	}
	
}