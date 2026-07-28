package com.progetto.backend.service;

import com.progetto.backend.dto.LoginRequest;
import com.progetto.backend.dto.RegisterRequest;
import com.progetto.backend.model.Utente;
import com.progetto.backend.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UtenteRepository utenteRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Utente registra(RegisterRequest request) {
        if (utenteRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email già in uso!");
        }

        Utente utente = new Utente();
        utente.setEmail(request.getEmail());
        utente.setPassword(passwordEncoder.encode(request.getPassword()));
        utente.setRuolo("USER");

        return utenteRepository.save(utente);
    }

    public Utente login(LoginRequest request) {
        Utente utente = utenteRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Credenziali non valide"));

        if (!passwordEncoder.matches(request.getPassword(), utente.getPassword())) {
            throw new RuntimeException("Credenziali non valide");
        }

        return utente;
    }
}