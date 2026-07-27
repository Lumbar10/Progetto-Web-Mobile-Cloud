package com.progetto.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.progetto.backend.model.Prodotto;

@Repository
public interface ProdottoRepository extends JpaRepository<Prodotto, Long> {

    
    
}
