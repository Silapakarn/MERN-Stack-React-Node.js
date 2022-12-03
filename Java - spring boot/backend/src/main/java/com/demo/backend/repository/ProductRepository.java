package com.demo.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
    
}
