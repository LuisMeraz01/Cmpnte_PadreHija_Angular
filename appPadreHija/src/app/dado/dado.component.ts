import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit{

  // propiedad que llega como parámetro de la componente padre
  @Input() valor: string=""; 

  constructor() { }

  ngOnInit() {
  }

}
