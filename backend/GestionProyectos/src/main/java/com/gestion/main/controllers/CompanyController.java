package com.gestion.main.controllers;


import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.main.dto.RegisterCompanyDTO;
import com.gestion.main.entitites.Company;
import com.gestion.main.services.CompanyService;

@RestController
@RequestMapping("/api")
public class CompanyController {

	private CompanyService companyService;
	
	public CompanyController(CompanyService companyService) {
		
		this.companyService = companyService;
	}
	
	@PostMapping("/companies")
	public RegisterCompanyDTO registerCompany(@RequestBody Company company) {
		
		return this.companyService.registerCompany(company);
	}
	
	@GetMapping("/companies/{email}")
	public List<Company> getAll(@PathVariable String email){
		System.out.println("esta es la sonsollls "+email);
		return this.companyService.getCompaniesEmail(email);
	}
	
	@GetMapping("/companies")
	public List<Company> getAll(){
	
		return this.companyService.getAll();
	}
	
}
