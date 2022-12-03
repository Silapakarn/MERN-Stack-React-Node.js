package com.codemobiles.stock_backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.codemobiles.stock_backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	//SELECT * FROM Product Where name = "foo" LIMIT 1
	Optional<Product> findTopByName(String name);
	
	//SELECT * FROM Product Where name LIKE = "%foo%" AND stock > x order by stock desc
	List<Product>findByNameContainingAndStockGreaterThanOrderByStockDesc(String name, int stock);
	
	
	//JPQL
	@Query(value = "SELECT * FROM Product WHERE STOCK = 0", nativeQuery = true)
	List<Product>checkOutOfStock();
	
	//SELECT * FROM Product Where name LIKE = "%:product_name%" AND stock > x order by stock desc
	@Query(value = "SELECT * FROM Product WHERE name LIKE %:product_name% AND price > :price", nativeQuery = true)
	List<Product>searchNameAndPrice(@Param("product_name") String name, int price);
}
