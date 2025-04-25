import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VehiculoListComponent } from './vehiculo-list.component';
import { VehiculoService } from '../vehiculo.service';
import { of } from 'rxjs';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [VehiculoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show table headers correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const headers = compiled.querySelectorAll('th');
    expect(headers[0].textContent).toContain('#');
    expect(headers[1].textContent).toContain('Marca');
    expect(headers[2].textContent).toContain('Línea');
    expect(headers[3].textContent).toContain('Modelo');
  });

  it('should display three vehicles from service', () => {
    const mockVehiculos = [
      { id: 1, marca: 'Chevrolet', linea: 'Captiva', referencia: 'Sport', modelo: 2020, kilometraje: 25000, color: 'Rojo', imagen: 'url1' },
      { id: 2, marca: 'Mazda', linea: 'CX-5', referencia: 'Grand Touring', modelo: 2019, kilometraje: 35000, color: 'Azul', imagen: 'url2' },
      { id: 3, marca: 'Renault', linea: 'Duster', referencia: '4x4', modelo: 2021, kilometraje: 15000, color: 'Gris', imagen: 'url3' }
    ];

    const vehiculoService = TestBed.inject(VehiculoService);
    spyOn(vehiculoService, 'getVehiculos').and.returnValue(of(mockVehiculos));

    component.ngOnInit();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);

    const firstRow = rows[0].querySelectorAll('td');
    expect(firstRow[0].textContent).toContain('Chevrolet');
    expect(firstRow[1].textContent).toContain('Captiva');
    expect(firstRow[2].textContent).toContain('2020');

    const secondRow = rows[1].querySelectorAll('td');
    expect(secondRow[0].textContent).toContain('Mazda');
    expect(secondRow[1].textContent).toContain('CX-5');
    expect(secondRow[2].textContent).toContain('2019');

    const thirdRow = rows[2].querySelectorAll('td');
    expect(thirdRow[0].textContent).toContain('Renault');
    expect(thirdRow[1].textContent).toContain('Duster');
    expect(thirdRow[2].textContent).toContain('2021');
  });
});
