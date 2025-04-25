import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.scss'],
  standalone: false,
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];
  totalVehiculos: number = 0;
  vehiculosPorMarca: { [key: string]: number } = {};
  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.getVehiculos();
  }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
      this.totalVehiculos = vehiculos.length;
      this.vehiculosPorMarca = this.vehiculos.reduce((acc, vehiculo) => {
        acc[vehiculo.marca] = (acc[vehiculo.marca] || 0) + 1;
        return acc;
      }, {} as { [key: string]: number });
    });
  }
}
