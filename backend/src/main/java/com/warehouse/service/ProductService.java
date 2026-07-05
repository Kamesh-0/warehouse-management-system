package com.warehouse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.warehouse.entity.product;
import com.warehouse.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Add Product
    public product saveProduct(product product) {
        return productRepository.save(product);
    }

    // Get All Products
    public List<product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get Product By Id
    public product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    // Update Product
    public product updateProduct(product product) {
        return productRepository.save(product);
    }

    // Delete Product
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}