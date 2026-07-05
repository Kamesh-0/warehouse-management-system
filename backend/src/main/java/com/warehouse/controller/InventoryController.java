package com.warehouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.warehouse.entity.Inventory;
import com.warehouse.service.InventoryService;

@RestController
@RequestMapping("/inventory")
@CrossOrigin("*")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @PostMapping
    public Inventory addInventory(@RequestBody Inventory inventory) {
        return inventoryService.saveInventory(inventory);
    }

    @GetMapping
    public List<Inventory> getAllInventory() {
        return inventoryService.getAllInventory();
    }

    @GetMapping("/{id}")
    public Inventory getInventoryById(@PathVariable Long id) {
        return inventoryService.getInventoryById(id);
    }

    @PutMapping
    public Inventory updateInventory(@RequestBody Inventory inventory) {
        return inventoryService.updateInventory(inventory);
    }

    @DeleteMapping("/{id}")
    public String deleteInventory(@PathVariable Long id) {
        inventoryService.deleteInventory(id);
        return "Inventory deleted successfully";
    }
}