package com.empServer.employee.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.empServer.employee.entity.Employee;
import com.empServer.employee.repository.EmployeeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository exmployeeRepository;

    public Employee postEmployee(Employee employee){ 
        return exmployeeRepository.save(employee);
    }

    public List<Employee> getAllEmployee(){ 
        return exmployeeRepository.findAll();
    }

}
