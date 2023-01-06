import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Personajes } from 'src/app/modelo/personajes.model';
import { PersonajesService } from 'src/app/servicios/personajes.service';
// import { Workbook } from 'exceljs';
// import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: Personajes[] =[];
  selectedPersona: any;
  expanded: boolean = true;

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    
  }

  Load = () => {
    this.personajes = this.personajesService.getEmployees();
    notify("Datos cargados correctamente",'success');
  }

  Ver = () =>{
    console.log(this.personajes);
    console.log(this.selectedPersona);
  }

  selectEmployee(e: any) {
    console.log('entro');

    e.component.byKey(e.currentSelectedRowKeys[0]).done((persona: Personajes) => {
        if(persona) {
            this.selectedPersona = persona;
        }
    });
  }

  // exportGrid(e: any) {
  //   if (e.format === 'xlsx') {
  //       const workbook = new Workbook(); 
  //       const worksheet = workbook.addWorksheet("Main sheet"); 
  //       exportDataGrid({ 
  //           worksheet: worksheet, 
  //           component: e.component,
  //       }).then(function() {
  //           workbook.xlsx.writeBuffer().then(function(buffer: any) { 
  //               saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
  //           }); 
  //       }); 
  //       e.cancel = true;
  //   } 
  //   else if (e.format === 'pdf') {
  //       const doc = new jsPDF();
  //       exportDataGridToPdf({
  //           jsPDFDocument: doc,
  //           component: e.component,
  //       }).then(() => {
  //           doc.save('DataGrid.pdf');
  //       });
  //   }
  // }

}
