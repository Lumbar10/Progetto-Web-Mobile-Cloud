package com.progetto.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.progetto.backend.model.Prodotto;
import com.progetto.backend.service.ProdottoService;

@RestController
@RequestMapping("/api/prodotti")
@CrossOrigin(origins = "http://localhost:4200")
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
}