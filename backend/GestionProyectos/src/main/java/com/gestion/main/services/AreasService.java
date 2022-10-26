package com.gestion.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestion.main.entitites.Areas;
import com.gestion.main.repositories.AreasRepository;

@Service
public class AreasService {

	@Autowired
	private AreasRepository repository;
	
	public String saveArea(Areas area) {
		
		Areas temp = this.repository.findByCompanyName(area.getCompanyName());
		System.out.println(temp);
		if (temp == null || !temp.getCompanyName().equalsIgnoreCase( area.getCompanyName())) {
			this.repository.save(area);
		} else {
		
			this.repository.deleteById(temp.getId());
			this.repository.save(area);
			return "ok";
		}
		
		return null;
	}
	
	public List<Areas> getAll(){
		return this.repository.findAll();
	}
}
