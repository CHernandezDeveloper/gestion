package com.gestion.main.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.main.entitites.UpInformation;

@Repository
public interface UpInformationRepository extends JpaRepository<UpInformation, Long>{

	public UpInformation findByP(Long p);
}
