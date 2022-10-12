package com.codemobiles.stock_backend.service;

import java.util.List;

import com.codemobiles.stock_backend.controller.request.ProdectRequest;
import com.codemobiles.stock_backend.model.Product;

public interface ProductService {
	List<Product>getAllProducts();
	Product getProductById(Long id);
	Product createProductById(ProdectRequest prodectRequest);
	Product updateProductById(ProdectRequest prodectRequest,Long id);
	void deleteProductById(Long id);
	
	Product getProductByName(String name);
	
	List<Product> getProductByNameAndStock(String name, int stock);
	
	List<Product> getProductOutOfStock();
	
	List<Product> getProductByNameAndPrice(String name, int price);
}
