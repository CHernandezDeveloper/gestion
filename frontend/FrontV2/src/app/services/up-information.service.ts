import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInformation } from '../models/up-information.model';

@Injectable({
  providedIn: 'root'
})
export class UpInformationService {

  preguntas = [
    {value:"",viewValue:""},
    { value: 'p1', viewValue: 'Tipo de entidad (Nacional, Territorial A, Territorial B o C)' },
    { value: 'p2', viewValue: 'Misión' },
    { value: 'p3', viewValue: 'Análisis de contexto: La entidad debe determinar los aspectos externos e internos que son necesarios para cumplir su propósito y que afectan su capacidad para lograr los resultados previstos en el MSPI' },
    { value: 'p4', viewValue: 'Mapa de Procesos' },
    { value: 'p5', viewValue: 'Organigrama de la entidad, detallando el área de seguridad de la información o quien haga sus veces' },
    { value: 'p6', viewValue: 'Políticas de seguridad de la información formalizada y firmada'},
    { value: 'p7', viewValue: 'Organigrama, roles y responsabilidades de seguridad de la información, asignación del recurso humano y comunicación de roles y responsabilidades.'},
    { value: 'p8', viewValue: 'Documento con el resultado de la autoevaluación realizada a la Entidad, de la gestión de la seguridad y privacidad de la información e infraestructura de red de comunicaciones (IPv4/IPv6), revisado y aprobado por la alta dirección'},
    { value: 'p9', viewValue: 'Documento con el resultado de la herramienta de la encuesta de diagnóstico de seguridad y privacidad de la información, revisado, aprobado y aceptado por la alta dirección'},
    { value: 'p10', viewValue: 'Documento con el resultado de la estratificación de la entidad, aceptado y aprobado por la alta dirección'},
    { value: 'p11', viewValue: 'Objetivo, alcance y límites del MSPI (Modelo de Seguridad y Privacidad de la Información)'},
    { value: 'p12', viewValue: 'Procedimientos de control documental del MSPI'},
    { value: 'p13', viewValue: 'Metodología de Gestión de riesgos'},
    { value: 'p14', viewValue: 'Riesgos identificados y valorados de acuerdo a la metodología'},
    { value: 'p15', viewValue: 'Planes de tratamiento de los riesgos'},
    { value: 'p16', viewValue: 'Formatos de acuerdos contractuales con empleados y contratistas para establecer responsabilidades de las partes en seguridad de la información '},
    { value: 'p17', viewValue: 'Procedimiento de verificación de antecedentes para candidatos a un empleo en la entidad'},
    { value: 'p18', viewValue: 'Documento con el plan de comunicación, sensibilización y capacitación en seguridad de la información, revisado y aprobado por la alta Dirección, con sus respectivos soportes.'},
    { value: 'p19', viewValue: 'Documento que haga claridad sobre el proceso disciplinario en caso de incumplimiento de las políticas de seguridad de la información'},
    { value: 'p20', viewValue: 'Inventario de activos de información clasificados, de la entidad, revisado y aprobado por la alta dirección'},
    { value: 'p21', viewValue: 'Inventario de áreas de procesamiento de información y telecomunicaciones'},
    { value: 'p22', viewValue: 'Diagrama de red de alto nivel o arquitectura de TI'},
    { value: 'p23', viewValue: 'Inclusión de la seguridad de la información en la gestión de proyectos'},
    { value: 'p24', viewValue: 'Inventario de partes externas o terceros a los que se transfiere información de la entidad'},
    { value: 'p25', viewValue: 'Formato de acuerdo de transferencia de información'},
    { value: 'p26', viewValue: 'Inventario de proveedores que tengan acceso a los activos de información, indicando el servicio que prestan o bienes que venden'},
    { value: 'p27', viewValue: 'Reporte de eventos e incidentes de seguridad de la información de los últimos 12 meses.'},
    { value: 'p28', viewValue: 'Plan de continuidad de  la Entidad aprobado'},
    { value: 'p29', viewValue: 'Inventario de obligaciones legales, estatutarias, reglamentarias, normativas relacionadas con seguridad de la información'},
    { value: 'p30', viewValue: 'Listado de auditorias relacionadas con seguridad de la información realizadas en la entidad'},
    { value: 'p31', viewValue: 'Procedimientos, manuales, guías, directrices, lineamientos, estándares, instructivos relacionados con seguridad de la información, el modelo de seguridad y privacidad de la información de MinTic y Gobierno en Línea.'},
    { value: 'p32', viewValue: 'Indicadores y métricas de seguridad de la información definidos.'},
    { value: 'p33', viewValue: 'Declaración de aplicabilidad'},
    { value: 'p34', viewValue: 'Aceptación de los riesgos residuales por parte de los dueños de los riesgos'},
    { value: 'p35', viewValue: 'Documento con la estrategia de planificación y control operacional, revisado y aprobado por la alta Dirección.'},
    { value: 'p36', viewValue: 'Avance en la ejecución del  plan de tratamiento de riesgos '},
    { value: 'p37', viewValue: 'Indicadores de gestión del MSPI definidos, revisados y aprobados por la alta Dirección.'},
    { value: 'p38', viewValue: 'Documento con el plan de seguimiento, evaluación, análisis y resultados del MSPI, revisado y aprobado por la alta Dirección.'},
    { value: 'p39', viewValue: 'Documento con el plan de auditorías internas y resultados, de acuerdo a lo establecido en el plan de auditorías, revisado y aprobado por la alta Dirección.'},
    { value: 'p40', viewValue: 'Resultado del seguimiento, evaluación y análisis del plan de tratamiento de riesgos, revisado y aprobado por la alta Dirección.'},
    { value: 'p41', viewValue: 'Documento con el plan de seguimiento, evaluación y análisis para el  MSPI, revisado y aprobado por la alta Dirección. '},
    { value: 'p42', viewValue: 'Documento con el consolidado de las auditorías realizadas de acuerdo con el plan de auditorías,  revisado y aprobado por la alta dirección y verifique como se asegura que los hallazgos, brechas, debilidades y oportunidades de mejora se subsanen, para asegurar la mejora continua.'},

  ]


  private URL_BACKEND:string = "http://localhost:8080/api"

  constructor(private httpClient : HttpClient) { }

  addQuestion(question: IInformation):Observable<string>{

    return this.httpClient.post<string>(this.URL_BACKEND+"/information",question);

  }

  get questions(){
    return this.preguntas;
  }


}
