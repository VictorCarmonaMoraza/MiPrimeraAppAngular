using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MiPrimeraAppAngular.Clases;
using MiPrimeraAppAngular.Models;

namespace MiPrimeraAppAngular.Controllers
{
    public class CategoriaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //Obligatorio poner HttpGet y Route
        [HttpGet]
        [Route("api/Categoria/listarCategorias")]
                //CategoriaCLS obliga a hacer un using MiPrimeraAppAngular.Clases;
        public IEnumerable<CategoriaCLS> listarCategorias()
        {
            //BDRestauranteContext obliga a hacer un using MiPrimeraAppAngular.Models;
            using (var bd = new BDRestauranteContext())
            {
                
                IEnumerable<CategoriaCLS> listaCategoria = (from
                      categoria in bd.Categoria
                                                             where categoria.Bhabilitado == 1
                                                             select new CategoriaCLS
                                                             {
                                                                 iidcategoria = categoria.Iidcategoria,
                                                                 nombre = categoria.Nombre
                                                             }).ToList();
                return listaCategoria;
            }
           
        }
    }
}