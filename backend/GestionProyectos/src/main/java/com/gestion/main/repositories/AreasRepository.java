package com.gestion.main.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.main.entitites.Areas;

@Repository
public interface AreasRepository extends JpaRepository<Areas, Long>{

	public Areas findByCompanyName(String companyName);
}
