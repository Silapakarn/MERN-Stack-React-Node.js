package com.demo.backend;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import com.demo.backend.util.DateUtils;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner init(ApplicationContext ctx, DateUtils dateUtils) {

		return args -> {
			System.out.println("karn-------------------------------------------------!!!");
			String[] beanNames = ctx.getBeanDefinitionNames();
			Arrays.sort(beanNames);

			for (String beanName : beanNames) {
				System.out.println(beanName);
			}

			System.out.println(dateUtils.todayString());
		};
	}

}
