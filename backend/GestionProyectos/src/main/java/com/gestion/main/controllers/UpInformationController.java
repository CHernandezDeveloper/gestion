package com.gestion.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.main.entitites.UpInformation;
import com.gestion.main.services.UpInformationService;

@RestController
@RequestMapping("/api")
public class UpInformationController {

	@Autowired
	private UpInformationService informationService;
	
	@PostMapping("/information")
	public String addQuestion(@RequestBody UpInformation information) {
		
		return this.informationService.save(information);
	}
	
	@GetMapping("/information")
	public List<UpInformation> getAll(){
		return this.informationService.getAll();
	}
}
