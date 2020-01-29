import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/Producto.Service';

@Component({
  selector: 'filtrado-producto-nombre',
  templateUrl: './filtrado-producto-nombre.component.html',
  styleUrls: ['./filtrado-producto-nombre.component.css']
})
export class FiltradoProductoNombreComponent implements OnInit {

  productos: any;
  //LLamaremos al servicio
  constructor(private productoService: ProductoService) {

  }

  ngOnInit() {
  }
  //Metodo llamado desde el html de este componente
  filtrarDatos(nombre) {
    //Si es vacio
    if (nombre.value == "") {
      //Si el nombre es vacio queremos que nos liste todos los elementos 
      this.productoService.getProducto().subscribe(data => this.productos = data);
    } else {
      this.productoService.getFiltroProductoPorNombre(nombre.value).subscribe(data => this.productos = data);
    }

  }
  limpiar(nombre) {
    nombre.value = "";
    this.productoService.getProducto().subscribe(data => this.productos = data);
  }
}
