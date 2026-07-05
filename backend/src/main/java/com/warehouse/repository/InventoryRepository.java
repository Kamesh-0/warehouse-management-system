package com.warehouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.warehouse.entity.Inventory;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {

}