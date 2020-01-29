import { Component, OnInit,Input } from '@angular/core';
//Importamos el servicio
import { ProductoService } from '../../services/Producto.Service';

@Component({
  selector: 'tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent implements OnInit {

  @Input() productos: any;

  cabeceras: string[] = ["Id Producto", "Nombre", "Precio", "Stock", "Nombre Categoria"];

  constructor(private producto: ProductoService) { }

  //Tod lo que ponagmos en el ngOnInit se va ejecutar cuando carga la pagina
  ngOnInit() {
    this.producto.getProducto().subscribe(data => this.productos = data);
  }

}
