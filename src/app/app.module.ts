import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLibrosComponent } from './pages/lista-libros/lista-libros.component';
import { NuevoLibroComponent } from './pages/nuevo-libro/nuevo-libro.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarAutorComponent } from './pages/listar-autor/listar-autor.component';
import { NuevoAutorComponent } from './pages/nuevo-autor/nuevo-autor.component';
import { ListaCategoriaComponent } from './pages/lista-categoria/lista-categoria.component';
import { NuevoCategoriaComponent } from './pages/nuevo-categoria/nuevo-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    NuevoLibroComponent,
    ListarAutorComponent,
    NuevoAutorComponent,
    ListaCategoriaComponent,
    NuevoCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
