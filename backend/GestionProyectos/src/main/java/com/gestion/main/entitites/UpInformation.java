package com.gestion.main.entitites;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UpInformation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Long p;
	private String fileName;
	private String observations;
	private String emailAuditor;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getP() {
		return p;
	}

	public void setP(Long p) {
		this.p = p;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getEmailAuditor() {
		return emailAuditor;
	}

	public void setEmailAuditor(String emailAuditor) {
		this.emailAuditor = emailAuditor;
	}

	public String getObservations() {
		return observations;
	}

	public void setObservations(String observations) {
		this.observations = observations;
	}

}
