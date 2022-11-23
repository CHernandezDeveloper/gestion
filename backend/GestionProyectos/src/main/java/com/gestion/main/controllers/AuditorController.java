package com.gestion.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.main.dto.AuditorDTO;
import com.gestion.main.dto.LoginRequest;
import com.gestion.main.entitites.Auditor;
import com.gestion.main.repositories.AuditorRepository;
import com.gestion.main.services.AuditorService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class AuditorController {
	
	@Autowired
	private AuditorRepository repository;
	
	private AuditorService auditorService;
	
	public AuditorController(AuditorService auditorService) {
		
		this.auditorService = auditorService;
	}
	
	@PostMapping("/auditors")
	public AuditorDTO registerAuditor(@RequestBody Auditor auditor) {
		
		return this.auditorService.registerAuditor(auditor);
	}
	
	@PostMapping("/login")
	public AuditorDTO login(@RequestBody LoginRequest request) {
		
		return this.auditorService.login(request);
	}
	
	@GetMapping("/auditors")
	public List<Auditor> getAll(){
		return this.auditorService.getAllAuditors();
	}
	
	@PostMapping("/actualizar")
	public Auditor actualizar(@RequestBody Auditor auditor) {		
		
		Auditor aud = this.repository.findByEmail(auditor.getEmail());
		auditor.setPhone(aud.getPhone());
		auditor.setId(aud.getId());
		auditor.setUserName(aud.getUserName());
		
		return this.repository.save(auditor);
		
	
	}
	
}
