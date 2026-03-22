package com.empServer.employee.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("")
@RequiredArgsConstructor
@CrossOrigin("*")
public class DefaultController {
    
    @GetMapping("/")
    public String health(){
        return "Employee Management server is alive";
    }
}
