package com.progetto.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

import com.progetto.backend.model.Prodotto;
import com.progetto.backend.repository.ProdottoRepository;

@Service
public class ProdottoService {

    @Autowired
    private ProdottoRepository prodottoRepository;

    public List<Prodotto> getAllProdotti() {
        return prodottoRepository.findAll();
    }

    public Prodotto saveProdotto(Prodotto prodotto) {
        return prodottoRepository.save(prodotto);
    }

    public Optional<Prodotto> getProdottoById(Long id) {
        return prodottoRepository.findById(id);
    }

    public void deleteProdotto(Long id){
        prodottoRepository.deleteById(id);
    }

    public Prodotto updateProdotto(Long id, Prodotto dettagli){
        Prodotto esistente = prodottoRepository.findById(id).orElseThrow();
        esistente.setNome(dettagli.getNome());
        esistente.setDescrizione(dettagli.getDescrizione());
        esistente.setQuantita(dettagli.getQuantita());
        return prodottoRepository.save(esistente);
    }

}
