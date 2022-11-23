package com.gestion.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.main.entitites.Resultado;
import com.gestion.main.services.ResultadoService;

@RestController
@RequestMapping("/api")
public class ResultadoController {
	
	@Autowired
	private ResultadoService service;
	
	@PostMapping("/guardar")
	public Resultado guardarResultado(@RequestBody Resultado paqueteGuardar) {
		return this.service.guardarResultado(paqueteGuardar);
	}
	
	@GetMapping("/listarResultados/{emailAuditor}")
	public List<Resultado> guardarResultado(@PathVariable String emailAuditor) {
		return this.service.listarResultadosEmail(emailAuditor);
	}
	
	@GetMapping("/test")
	public String test() {
		return "hello";
	}
}
