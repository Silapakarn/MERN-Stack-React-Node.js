package com.demo.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity
public class Product {
    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) long id;
    private String name;
    private String image;
    private int price;
    private int stock;
}
