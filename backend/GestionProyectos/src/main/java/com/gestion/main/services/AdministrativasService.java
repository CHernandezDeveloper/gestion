package com.gestion.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestion.main.entitites.Administrativas;
import com.gestion.main.repositories.AdministrativasRepository;

@Service
public class AdministrativasService {

	@Autowired
	AdministrativasRepository repository;
	
	public String regResults(Administrativas administrativas) {
		
		this.repository.save(administrativas);
		
		return "ok";			
	}
	
	public List<Administrativas> listarTodas(){
		
		return this.repository.findAll();
	}
	
	public List<Administrativas> listarPorAuditor(String auditor){
		
		return this.repository.findByEmailAuditor(auditor);
	}
}
