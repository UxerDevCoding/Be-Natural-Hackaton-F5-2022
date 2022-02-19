package net.javaguides.springboot.benatural.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import net.javaguides.springboot.benatural.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
