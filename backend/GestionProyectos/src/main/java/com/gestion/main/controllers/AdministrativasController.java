package com.gestion.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.main.entitites.Administrativas;
import com.gestion.main.services.AdministrativasService;

@RestController
@RequestMapping("api")
public class AdministrativasController {

	@Autowired
	private AdministrativasService service;
	
	@GetMapping("/listar")
	public List<Administrativas> listarTodas() {
		
		return this.service.listarTodas();
				
	}
	
	@PostMapping("/registrar")
	public String registrar(@RequestBody Administrativas administrativas) {
		
		return this.service.regResults(administrativas);
				
	}
	
}
