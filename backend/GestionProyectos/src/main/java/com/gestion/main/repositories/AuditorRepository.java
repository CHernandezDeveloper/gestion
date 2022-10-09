package com.gestion.main.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.main.entitites.Auditor;

@Repository
public interface AuditorRepository extends JpaRepository<Auditor, Long>{
	
	public Auditor findByEmail(String email);
	
}
