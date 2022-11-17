package com.sha.springbootdeviceseller;

import javax.persistence.Basic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class SpringBootDeviceSellerApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(SpringBootDeviceSellerApplication.class, args);
	}

}
 