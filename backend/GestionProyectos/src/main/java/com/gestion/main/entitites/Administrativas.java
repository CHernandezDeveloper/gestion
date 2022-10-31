package com.gestion.main.entitites;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Administrativas {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Long ad1;
	private Long ad2;
	private Long ad3;
	private Long ad4;
	private Long ad5;
	private Long ad6;
	private Long ad7;
	private String companyName;
	private String emailAuditor;
	


	public String getEmailAuditor() {
		return emailAuditor;
	}

	public void setEmailAuditor(String emailAuditor) {
		this.emailAuditor = emailAuditor;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getAd1() {
		return ad1;
	}

	public void setAd1(Long ad1) {
		this.ad1 = ad1;
	}

	public Long getAd2() {
		return ad2;
	}

	public void setAd2(Long ad2) {
		this.ad2 = ad2;
	}

	public Long getAd3() {
		return ad3;
	}

	public void setAd3(Long ad3) {
		this.ad3 = ad3;
	}

	public Long getAd4() {
		return ad4;
	}

	public void setAd4(Long ad4) {
		this.ad4 = ad4;
	}

	public Long getAd5() {
		return ad5;
	}

	public void setAd5(Long ad5) {
		this.ad5 = ad5;
	}

	public Long getAd6() {
		return ad6;
	}

	public void setAd6(Long ad6) {
		this.ad6 = ad6;
	}

	public Long getAd7() {
		return ad7;
	}

	public void setAd7(Long ad7) {
		this.ad7 = ad7;
	}

}
