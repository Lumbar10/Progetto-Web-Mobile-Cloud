package com.progetto.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TestController {

    @GetMapping("/test")
    public String test() {
        return "Il backend è configurato e funzionante!";
    }
}  

