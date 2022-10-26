package com.gestion.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.main.entitites.Areas;
import com.gestion.main.services.AreasService;

@RestController
@RequestMapping("/api")
public class AreasController {

	@Autowired
	private AreasService service;
	
	@PostMapping("/area")
	public String save(@RequestBody Areas area) {
		
		return this.service.saveArea(area);
	}
	
	@GetMapping("/areas")
	public List<Areas> getAll(){
		return this.service.getAll();
	}
}
