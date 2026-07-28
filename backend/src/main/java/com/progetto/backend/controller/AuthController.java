package com.progetto.backend.controller;

import com.progetto.backend.DTO.LoginRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {

        if ("admin@email.com".equals(loginRequest.getEmail()) && "123456".equals(loginRequest.getPassword())) {
            Map<String, String> response = new HashMap<>();
            response.put("email", loginRequest.getEmail());
            response.put("nome", "Admin");
            return ResponseEntity.ok(response);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenziali Errate");

    }
}
