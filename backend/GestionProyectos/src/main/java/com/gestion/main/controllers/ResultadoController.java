package com.gestion.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gestion.main.entitites.Resultado;
import com.gestion.main.services.ResultadoService;

@Controller
@RequestMapping("/resultados")
public class ResultadoController {
	
	@Autowired
	private ResultadoService service;
	
	@PostMapping("guardar")
	public Resultado guardarResultado(@RequestBody Resultado paqueteGuardar) {
		return this.service.guardarResultado(paqueteGuardar);
	}
	
	@GetMapping("listarResultados/{emailAuditor}")
	public List<Resultado> guardarResultado(@PathVariable String emailAuditor) {
		return this.service.listarResultadosEmail(emailAuditor);
	}
}
