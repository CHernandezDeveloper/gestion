package com.gestion.main.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.main.entitites.Administrativas;

@Repository
public interface AdministrativasRepository extends JpaRepository<Administrativas, Long>{

	List<Administrativas> findByEmailAuditor(String emailAuditor);
}
