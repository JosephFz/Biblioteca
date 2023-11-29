import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './pages/lista-libros/lista-libros.component';
import { NuevoLibroComponent } from './pages/nuevo-libro/nuevo-libro.component';
import { ListarAutorComponent } from './pages/listar-autor/listar-autor.component';
import { NuevoAutorComponent } from './pages/nuevo-autor/nuevo-autor.component';
import { ListaLocalizacionComponent } from './pages/lista-localizacion/lista-localizacion.component';
import { NuevaLocalizacionComponent } from './pages/nueva-localizacion/nueva-localizacion.component';
import { ListaEditorialComponent } from './pages/lista-editorial/lista-editorial.component';
import { NuevaEditorialComponent } from './pages/nueva-editorial/nueva-editorial.component';

const routes: Routes = [
  {path:'libro-lista', component: ListaLibrosComponent},
  {path:'libro-nuevo', component: NuevoLibroComponent},
  
  {path:'autor-nuevo', component: NuevoAutorComponent},
  {path:'autor-lista', component: ListarAutorComponent},
  {path:'localizacion-lista', component: ListaLocalizacionComponent},
  {path:'localizacion-nuevo', component: NuevaLocalizacionComponent},
  {path:'editorial-lista', component: ListaEditorialComponent},
  {path:'editorial-nuevo', component: NuevaEditorialComponent}





  /*{path:'libro/editar/:id', component: EditarViajeComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
