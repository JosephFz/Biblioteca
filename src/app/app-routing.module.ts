import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './pages/lista-libros/lista-libros.component';
import { NuevoLibroComponent } from './pages/nuevo-libro/nuevo-libro.component';
import { ListarAutorComponent } from './pages/listar-autor/listar-autor.component';
import { NuevoAutorComponent } from './pages/nuevo-autor/nuevo-autor.component';

const routes: Routes = [
  {path:'libro-lista', component: ListaLibrosComponent},
  {path:'libro-nuevo', component: NuevoLibroComponent},
  
  {path:'autor-nuevo', component: NuevoAutorComponent},
  {path:'autor-lista', component: ListarAutorComponent}

  /*{path:'libro/editar/:id', component: EditarViajeComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
