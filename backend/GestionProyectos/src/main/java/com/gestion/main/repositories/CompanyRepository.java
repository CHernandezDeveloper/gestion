package com.gestion.main.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.main.entitites.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
	
	public Company findByName(String name);
	public List<Company> findByEmail(String email);
}
