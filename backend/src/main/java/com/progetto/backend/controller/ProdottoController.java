package com.progetto.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.progetto.backend.model.Prodotto;
import com.progetto.backend.service.ProdottoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/api/prodotti")
public class ProdottoController {

    @Autowired
    private ProdottoService prodottoService;

    @GetMapping
    public List<Prodotto> getProdotti() {
        return prodottoService.getAllProdotti();
    }

    @PostMapping
    public Prodotto addProdotto(@RequestBody Prodotto prodotto) {
        return prodottoService.saveProdotto(prodotto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Prodotto> getProdottoById(@PathVariable Long id) {
        return prodottoService.getProdottoById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProdotto(@PathVariable Long id) {
        prodottoService.deleteProdotto(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Prodotto> updateProdotto(@PathVariable Long id, @RequestBody Prodotto dettagli) {
        return ResponseEntity.ok(prodottoService.updateProdotto(id, dettagli));
    }
    
}