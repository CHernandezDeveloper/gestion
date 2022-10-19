package com.gestion.main.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gestion.main.dto.RegisterCompanyDTO;
import com.gestion.main.entitites.Company;
import com.gestion.main.repositories.CompanyRepository;

@Service
public class CompanyService {
	
	private CompanyRepository companyRepository;
	
	public CompanyService(CompanyRepository companyRepository) {
		
		this.companyRepository = companyRepository;
	}
	
	public RegisterCompanyDTO registerCompany(Company company){
		if(this.companyRepository.findByName(company.getName()) == null) {
			this.companyRepository.save(company);
			return new RegisterCompanyDTO(company.getName(),company.getEmailAuditor());
		}
		return null;
	}
	
	public List<Company> getCompaniesEmail(String email){
		
		return this.companyRepository.findByEmail(email);
	}
	
	public List<Company> getAll(){
		return this.companyRepository.findAll();
	}
}
