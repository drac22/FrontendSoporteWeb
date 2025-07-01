import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaClientes } from "./admin/clientes/tabla/tabla";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'FrontendSoporteWeb';
}
