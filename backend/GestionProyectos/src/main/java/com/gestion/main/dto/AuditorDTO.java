package com.gestion.main.dto;

public class AuditorDTO {
	
	private String password;
	private String email;
	
	public AuditorDTO(String email, String password) {
		
		this.password = password;
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
}
