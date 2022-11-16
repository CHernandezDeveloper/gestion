package com.gestion.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestion.main.entitites.Resultado;
import com.gestion.main.repositories.ResultadoRepository;

@Service
public class ResultadoService {

	@Autowired
	private ResultadoRepository respository;
	
	public Resultado guardarResultado(Resultado resultadoGuardar) {
		
		return this.respository.save(resultadoGuardar);
		
	}
	public List<Resultado> listarResultadosEmail(String emailAuditor){
		
		return this.respository.findByEmailAuditor(emailAuditor);
	}
}
