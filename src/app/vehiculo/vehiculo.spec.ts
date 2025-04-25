import { Vehiculo } from './vehiculo';

describe('Vehiculo', () => {
  it('should create an instance', () => {
    expect(new Vehiculo(1, 'Toyota', 'Corolla', 'GL', 2020, 100000, 'Rojo', 'https://via.placeholder.com/150')).toBeTruthy();
  });
});
