//Para sacar la urlBase tenemos que importar el Inject
import { Injectable, Inject } from '@angular/core';
//Obligatorio en los servicios para hacer llamada al controlador
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaService {

  urlBase: string;

  constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
    //Aqui guardamos el dominio
    this.urlBase = baseUrl;

  }
  public getCategoria() {
    return this.http.get(this.urlBase + "api/Categoria/listarCategorias").map(res => res.json());
  }

}
