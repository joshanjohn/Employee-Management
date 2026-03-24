package com.empServer.employee.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.empServer.employee.entity.Employee;
import com.empServer.employee.service.EmployeeService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;





@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EmployeeController {

    private final EmployeeService employeeService; 


    @GetMapping("/employees")
    public List<Employee> getEmployee() {
        return employeeService.getAllEmployee();
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeService.getEmployeeById(id);
        
        if (employee == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(employee);
    }
    
    
    @PostMapping("/employee")
    public Employee postEmployee(
        @RequestBody Employee employee
    ){ 
        return employeeService.postEmployee(employee);
    }



    @DeleteMapping("/employee/{id}")
    public ResponseEntity<?> deleteEmployeeById(@PathVariable Long id) {
        try{
            employeeService.deleteEmployeeById(id);
            return new ResponseEntity<>("Employee with ID " + id + " deleted sucessfully.", HttpStatus.OK);
        }catch(EntityNotFoundException e){ 
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
    

}
