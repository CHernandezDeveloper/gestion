package com.gestion.main.util;

import java.io.FileNotFoundException;

import org.springframework.stereotype.Component;

import com.itextpdf.kernel.pdf.PdfWriter;

@Component("")
public class GenerarPDF {
	
	public void createPDF() throws FileNotFoundException {
		
		String filePath ="";
		PdfWriter writer = new PdfWriter(filePath);
	}
}
