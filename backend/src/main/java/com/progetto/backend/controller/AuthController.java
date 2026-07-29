package com.progetto.backend.controller;

import com.progetto.backend.dto.ChangePasswordRequest;
import com.progetto.backend.dto.LoginRequest;
import com.progetto.backend.dto.RegisterRequest;
import com.progetto.backend.model.Utente;
import com.progetto.backend.service.AuthService;
import com.progetto.backend.service.JwtService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest registerRequest) {
        try {
            Utente nuovoUtente = authService.registra(registerRequest);
            return ResponseEntity.ok(nuovoUtente);
        } catch (RuntimeException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            Utente utente = authService.login(request);
            String token = jwtService.generateToken(utente);

            // Generazione Cookie HttpOnly
            ResponseCookie jwtCookie = ResponseCookie.from("jwtToken", token)
                    .httpOnly(true)
                    .secure(false) // Impostare a 'true' in produzione con HTTPS
                    .path("/")
                    .maxAge(24 * 3600) // Valido 24 ore
                    .sameSite("Lax")
                    .build();

            return ResponseEntity.ok()
                    .header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
                    .body(Map.of(
                            "message", "Login effettuato con successo",
                            "email", utente.getEmail(),
                            "role", utente.getRuolo()));
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body(Map.of("message", "Credenziali non valide"));
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        ResponseCookie cookie = ResponseCookie.from("jwtToken", "")
                .httpOnly(true)
                .secure(false) // imposta true in produzione (HTTPS)
                .path("/")
                .maxAge(0) // Scade immediatamente
                .sameSite("Lax")
                .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(Map.of("message", "Logout effettuato"));
    }

    @PutMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request) {
        try {
            // Estrae l'email dell'utente autenticato dal SecurityContext (popolato dal JWT)
            String email = SecurityContextHolder.getContext().getAuthentication().getName();

            authService.cambiaPassword(email, request);
            return ResponseEntity.ok(Map.of("message", "Password aggiornata con successo"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }
}