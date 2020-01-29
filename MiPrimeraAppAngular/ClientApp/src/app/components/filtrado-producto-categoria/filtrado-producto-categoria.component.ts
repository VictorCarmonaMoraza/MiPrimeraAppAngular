import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/Producto.Service';

@Component({
  selector: 'filtrado-producto-categoria',
  templateUrl: './filtrado-producto-categoria.component.html',
  styleUrls: ['./filtrado-producto-categoria.component.css']
})
export class FiltradoProductoCategoriaComponent implements OnInit {

  productos: any;
  constructor(private productoService: ProductoService) {

  }

  ngOnInit() {
  }

  //Los metodos que hay declarados en el html, que reciben la categoria
  buscar(categoria) {
    //Si el valor de la categoria es vacio
    if (categoria.value == "") {
      this.productoService.getProducto().subscribe(rpta => this.productos = rpta);
    } else {
      this.productoService.getFiltrôProductoPorCategoria(categoria.value).subscribe(rpta => this.productos = rpta);
    }
    
  }
  //Los metodos que hay declarados en el html, que reciben la categoria
  limpiar(categoria) {
    categoria.value = "";
    this.productoService.getProducto().subscribe(rpta => this.productos=rpta);
  }

}
