package com.gestion.main.entitites;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Resultado {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String auditor;
	private String companyName;
	private String emailAuditor;

	private Long r1;
	private Long r2;
	private Long r3;
	private Long r4s1;
	private Long r4s2;
	private Long r4s3;
	private Long r5;
	private Long r6;
	private Long r7;
	private Long r8;

	// Nivel de madurez gestionado
	private Long r9;
	private Long r10;
	private Long r11;
	private Long r12;
	private Long r13;
	private Long r14;
	private Long r15;
	private Long r16;
	private Long r17;
	private Long r18;
	private Long r19;
	// Nivel de madurez definido

	private Long r20;
	private Long r21;
	private Long r22;
	private Long r23;
	private Long r24;
	private Long r25;
	private Long r26;
	private Long r27;
	private Long r28;
	private Long r29;
	private Long r30;
	private Long r31;
	private Long r32;
	private Long r33;
	private Long r34;
	private Long r35;
	private Long r36;
	private Long r37;
	private Long r38;
	private Long r39;
	private Long r40;

	// L?imite de madurez gestionado cuantitativamente
	private Long r41s1;
	private Long r41s2;
	private Long r41s3;
	private Long r41s4;
	private Long r41s5;
	private Long r42;
	private Long r43;
	private Long r44;
	private Long r45;
	private Long r46;
	private Long r47;
	private Long r48;
	private Long r49;
	private Long r50;
	private Long r51;
	private Long r52;
	private Long r53;

	// Limite de madurez optimizado
	private Long r55;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAuditor() {
		return auditor;
	}

	public void setAuditor(String auditor) {
		this.auditor = auditor;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getEmailAuditor() {
		return emailAuditor;
	}

	public void setEmailAuditor(String emailAuditor) {
		this.emailAuditor = emailAuditor;
	}

	public Long getR1() {
		return r1;
	}

	public void setR1(Long r1) {
		this.r1 = r1;
	}

	public Long getR2() {
		return r2;
	}

	public void setR2(Long r2) {
		this.r2 = r2;
	}

	public Long getR3() {
		return r3;
	}

	public void setR3(Long r3) {
		this.r3 = r3;
	}

	public Long getR4s1() {
		return r4s1;
	}

	public void setR4s1(Long r4s1) {
		this.r4s1 = r4s1;
	}

	public Long getR4s2() {
		return r4s2;
	}

	public void setR4s2(Long r4s2) {
		this.r4s2 = r4s2;
	}

	public Long getR4s3() {
		return r4s3;
	}

	public void setR4s3(Long r4s3) {
		this.r4s3 = r4s3;
	}

	public Long getR5() {
		return r5;
	}

	public void setR5(Long r5) {
		this.r5 = r5;
	}

	public Long getR6() {
		return r6;
	}

	public void setR6(Long r6) {
		this.r6 = r6;
	}

	public Long getR7() {
		return r7;
	}

	public void setR7(Long r7) {
		this.r7 = r7;
	}

	public Long getR8() {
		return r8;
	}

	public void setR8(Long r8) {
		this.r8 = r8;
	}

	public Long getR9() {
		return r9;
	}

	public void setR9(Long r9) {
		this.r9 = r9;
	}

	public Long getR10() {
		return r10;
	}

	public void setR10(Long r10) {
		this.r10 = r10;
	}

	public Long getR11() {
		return r11;
	}

	public void setR11(Long r11) {
		this.r11 = r11;
	}

	public Long getR12() {
		return r12;
	}

	public void setR12(Long r12) {
		this.r12 = r12;
	}

	public Long getR13() {
		return r13;
	}

	public void setR13(Long r13) {
		this.r13 = r13;
	}

	public Long getR14() {
		return r14;
	}

	public void setR14(Long r14) {
		this.r14 = r14;
	}

	public Long getR15() {
		return r15;
	}

	public void setR15(Long r15) {
		this.r15 = r15;
	}

	public Long getR16() {
		return r16;
	}

	public void setR16(Long r16) {
		this.r16 = r16;
	}

	public Long getR17() {
		return r17;
	}

	public void setR17(Long r17) {
		this.r17 = r17;
	}

	public Long getR18() {
		return r18;
	}

	public void setR18(Long r18) {
		this.r18 = r18;
	}

	public Long getR19() {
		return r19;
	}

	public void setR19(Long r19) {
		this.r19 = r19;
	}

	public Long getR20() {
		return r20;
	}

	public void setR20(Long r20) {
		this.r20 = r20;
	}

	public Long getR21() {
		return r21;
	}

	public void setR21(Long r21) {
		this.r21 = r21;
	}

	public Long getR22() {
		return r22;
	}

	public void setR22(Long r22) {
		this.r22 = r22;
	}

	public Long getR23() {
		return r23;
	}

	public void setR23(Long r23) {
		this.r23 = r23;
	}

	public Long getR24() {
		return r24;
	}

	public void setR24(Long r24) {
		this.r24 = r24;
	}

	public Long getR25() {
		return r25;
	}

	public void setR25(Long r25) {
		this.r25 = r25;
	}

	public Long getR26() {
		return r26;
	}

	public void setR26(Long r26) {
		this.r26 = r26;
	}

	public Long getR27() {
		return r27;
	}

	public void setR27(Long r27) {
		this.r27 = r27;
	}

	public Long getR28() {
		return r28;
	}

	public void setR28(Long r28) {
		this.r28 = r28;
	}

	public Long getR29() {
		return r29;
	}

	public void setR29(Long r29) {
		this.r29 = r29;
	}

	public Long getR30() {
		return r30;
	}

	public void setR30(Long r30) {
		this.r30 = r30;
	}

	public Long getR31() {
		return r31;
	}

	public void setR31(Long r31) {
		this.r31 = r31;
	}

	public Long getR32() {
		return r32;
	}

	public void setR32(Long r32) {
		this.r32 = r32;
	}

	public Long getR33() {
		return r33;
	}

	public void setR33(Long r33) {
		this.r33 = r33;
	}

	public Long getR34() {
		return r34;
	}

	public void setR34(Long r34) {
		this.r34 = r34;
	}

	public Long getR35() {
		return r35;
	}

	public void setR35(Long r35) {
		this.r35 = r35;
	}

	public Long getR36() {
		return r36;
	}

	public void setR36(Long r36) {
		this.r36 = r36;
	}

	public Long getR37() {
		return r37;
	}

	public void setR37(Long r37) {
		this.r37 = r37;
	}

	public Long getR38() {
		return r38;
	}

	public void setR38(Long r38) {
		this.r38 = r38;
	}

	public Long getR39() {
		return r39;
	}

	public void setR39(Long r39) {
		this.r39 = r39;
	}

	public Long getR40() {
		return r40;
	}

	public void setR40(Long r40) {
		this.r40 = r40;
	}

	public Long getR41s1() {
		return r41s1;
	}

	public void setR41s1(Long r41s1) {
		this.r41s1 = r41s1;
	}

	public Long getR41s2() {
		return r41s2;
	}

	public void setR41s2(Long r41s2) {
		this.r41s2 = r41s2;
	}

	public Long getR41s3() {
		return r41s3;
	}

	public void setR41s3(Long r41s3) {
		this.r41s3 = r41s3;
	}

	public Long getR41s4() {
		return r41s4;
	}

	public void setR41s4(Long r41s4) {
		this.r41s4 = r41s4;
	}

	public Long getR41s5() {
		return r41s5;
	}

	public void setR41s5(Long r41s5) {
		this.r41s5 = r41s5;
	}

	public Long getR42() {
		return r42;
	}

	public void setR42(Long r42) {
		this.r42 = r42;
	}

	public Long getR43() {
		return r43;
	}

	public void setR43(Long r43) {
		this.r43 = r43;
	}

	public Long getR44() {
		return r44;
	}

	public void setR44(Long r44) {
		this.r44 = r44;
	}

	public Long getR45() {
		return r45;
	}

	public void setR45(Long r45) {
		this.r45 = r45;
	}

	public Long getR46() {
		return r46;
	}

	public void setR46(Long r46) {
		this.r46 = r46;
	}

	public Long getR47() {
		return r47;
	}

	public void setR47(Long r47) {
		this.r47 = r47;
	}

	public Long getR48() {
		return r48;
	}

	public void setR48(Long r48) {
		this.r48 = r48;
	}

	public Long getR49() {
		return r49;
	}

	public void setR49(Long r49) {
		this.r49 = r49;
	}

	public Long getR50() {
		return r50;
	}

	public void setR50(Long r50) {
		this.r50 = r50;
	}

	public Long getR51() {
		return r51;
	}

	public void setR51(Long r51) {
		this.r51 = r51;
	}

	public Long getR52() {
		return r52;
	}

	public void setR52(Long r52) {
		this.r52 = r52;
	}

	public Long getR53() {
		return r53;
	}

	public void setR53(Long r53) {
		this.r53 = r53;
	}

	public Long getR55() {
		return r55;
	}

	public void setR55(Long r55) {
		this.r55 = r55;
	}
	
	
}
