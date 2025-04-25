import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehiculoModule } from './vehiculo/vehiculo.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VehiculoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TuSegundazo.com';
}
