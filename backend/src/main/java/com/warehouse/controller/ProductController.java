package com.warehouse.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.warehouse.entity.product;
import com.warehouse.service.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public product addProduct(@RequestBody product product) {
        return productService.saveProduct(product);
    }

    @GetMapping
    public List<product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PutMapping
    public product updateProduct(@RequestBody product product) {
        return productService.updateProduct(product);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return "Product deleted successfully";
    }
}