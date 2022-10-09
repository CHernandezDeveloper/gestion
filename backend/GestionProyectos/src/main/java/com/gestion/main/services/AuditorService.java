package com.gestion.main.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.gestion.main.dto.AuditorDTO;
import com.gestion.main.dto.LoginRequest;
import com.gestion.main.entitites.Auditor;
import com.gestion.main.repositories.AuditorRepository;

@Service
public class AuditorService {
	
	private AuditorRepository repository;
	
	public AuditorService(AuditorRepository repository) {
		
		this.repository = repository;
	}
	
	public AuditorDTO registerAuditor(Auditor auditor) {
		
		Auditor auditorTemp = this.repository.findByEmail(auditor.getEmail());
		
		if(auditorTemp == null) {
			
			this.repository.save(auditor);
			return new AuditorDTO(auditor.getEmail(),auditor.getPassword());
		
		}
		
		return null;
		
	}
	
	public AuditorDTO login(LoginRequest auditor) {
		
		Auditor auditorTemp = this.repository.findByEmail(auditor.getEmail());
		
		
		
		if(auditorTemp != null) {
			
			if(auditor.getPassword().equalsIgnoreCase(auditorTemp.getPassword())) {
				
				return new AuditorDTO(auditorTemp.getEmail(), auditorTemp.getPassword());
			}
		}
		return null;
	}
	
	public List<Auditor> getAllAuditors(){
		
		return this.repository.findAll();
	}
}
