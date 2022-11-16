package com.gestion.main.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.main.entitites.Resultado;

@Repository
public interface ResultadoRepository extends JpaRepository<Resultado, Long> {
	
	public List<Resultado> findByEmailAuditor(String emailAuditor);
}
