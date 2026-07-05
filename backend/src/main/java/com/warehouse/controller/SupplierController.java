package com.warehouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.warehouse.entity.Supplier;
import com.warehouse.service.SupplierService;

@RestController
@RequestMapping("/suppliers")
@CrossOrigin("*")
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    @PostMapping
    public Supplier addSupplier(@RequestBody Supplier supplier) {
        return supplierService.saveSupplier(supplier);
    }

    @GetMapping
    public List<Supplier> getAllSuppliers() {
        return supplierService.getAllSuppliers();
    }

    @GetMapping("/{id}")
    public Supplier getSupplierById(@PathVariable Long id) {
        return supplierService.getSupplierById(id);
    }

    @PutMapping
    public Supplier updateSupplier(@RequestBody Supplier supplier) {
        return supplierService.updateSupplier(supplier);
    }

    @DeleteMapping("/{id}")
    public String deleteSupplier(@PathVariable Long id) {
        supplierService.deleteSupplier(id);
        return "Supplier deleted successfully";
    }
}