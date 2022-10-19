package com.gestion.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestion.main.entitites.UpInformation;
import com.gestion.main.repositories.UpInformationRepository;

@Service
public class UpInformationService {

	@Autowired
	private UpInformationRepository informationRepository;

	public String save(UpInformation information) {
		UpInformation temp = this.informationRepository.findByP(information.getP());

		if (temp == null) {
			this.informationRepository.save(information);
		} else {
			
			this.informationRepository.deleteById(temp.getId());
			this.informationRepository.save(information);
			return "ok";
		}

		return null;
	}
	
	public List<UpInformation> getAll(){
		System.out.println("casa");
		return this.informationRepository.findAll();
	}
}
