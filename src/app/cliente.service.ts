import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: Partial<{ name: string | null; cif: string | null; dire: string | null; pais: string | null; }>[] = [];

  agregarCliente(cliente: Partial<{ name: string | null; cif: string | null; dire: string | null; pais: string | null; }>): void {
    this.clientes.push(cliente);
  }

  obtenerClientes(): Partial<{ name: string | null; cif: string | null; dire: string | null; pais: string | null; }>[] {
    return this.clientes;
  }
  constructor() { }
}

