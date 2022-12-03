package com.demo.backend.controller.api;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.demo.backend.controller.request.ProductRequest;
import com.demo.backend.exception.ProductNotFoundException;
import com.demo.backend.model.Product;
import com.demo.backend.service.StorageService;

@RestController
@RequestMapping("/product")
public class productController {

    private final AtomicLong counter = new AtomicLong();
    private List<Product> products = new ArrayList<>();
    private StorageService storageService;

    productController(StorageService storageService) {
        this.storageService = storageService;
    }

    // ....../product
    @GetMapping()
    public List<Product> getProducts() {
        return products;
    }

    // ..../product/1234
    @GetMapping("/{id}")
    public Product getProduct(@PathVariable long id) {
        return products.stream()
                .filter(result -> result.getId() == id)
                .findFirst().orElseThrow(
                        () -> new ProductNotFoundException(id));
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping()
    public Product addProduct(ProductRequest productRequest) {

        String fileName = storageService.store(productRequest.getImage());
        Product data = new Product(
                counter.incrementAndGet(),
                productRequest.getName(),
                fileName,
                productRequest.getPrice(),
                productRequest.getStock());
        products.add(data);
        return data;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PutMapping("/{id}")
    public void editProduct(@RequestBody Product product, @PathVariable long id) {

        products.stream().filter(result -> result.getId() == id)
                .findFirst().ifPresentOrElse(result -> {
                    result.setName(product.getName());
                    result.setImage(product.getImage());
                    result.setPrice(product.getPrice());
                    result.setStock(product.getStock());
                }, () -> {
                    throw new ProductNotFoundException(id);
                });
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable long id) {

        products.stream().filter(result -> result.getId() == id).findFirst()
                .ifPresentOrElse(result -> products.remove(result), () -> {
                    throw new ProductNotFoundException(id);
                });
    }
}
