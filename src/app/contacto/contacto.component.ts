import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  favoriteFramework: string = '';
  
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    msg: new FormControl('', Validators.required),
    respost: new FormControl('', Validators.required),
  });

  sendForm(): void {
    console.log(this.favoriteFramework);
  }
  constructor(private clienteService: ClienteService) {}

  // ...

handleContactFormSubmit(): void {
  const respuestaCorrecta = 2 + 3;
  const respuesta = this.contactForm.value.respost;

  // Verificar si respuesta es null o undefined antes de llamar a parseInt
  if (respuesta !== null && respuesta !== undefined) {
    const respuestaUsuario = parseInt(respuesta, 10);

    if (!isNaN(respuestaUsuario) && respuestaUsuario === respuestaCorrecta) {
      const nuevoCliente = this.contactForm.value;
      this.clienteService.agregarCliente(nuevoCliente);
      console.log(nuevoCliente);
    } else {
      alert('¡Fallaste! ERES UN ROBOT');
    }
  }
}

}
