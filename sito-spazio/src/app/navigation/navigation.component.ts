import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Output() mandaDatiEvento = new EventEmitter<string>();
  @Output() mandaDatiEvento2 = new EventEmitter<string>();
  @Output() mandaDatiEvento3 = new EventEmitter<string>();
  @Output() mandaDatiEvento4 = new EventEmitter<string>();
  @Output() mandaDatiEvento5 = new EventEmitter<string>();
  pagina = "welcome"
  apriHome() {
    this.pagina = "welcome"
    this.mandaDatiEvento.emit(this.pagina);
  }
  apriBiglietti() {
    this.pagina = "biglietti"
    this.mandaDatiEvento2.emit(this.pagina);
  }
  apriRazzo() {
    this.pagina = "Razzo"
    this.mandaDatiEvento3.emit(this.pagina);
  }  
  apriMarte() {
    this.pagina = "Marte"
    this.mandaDatiEvento4.emit(this.pagina);
  }
  apriLuna() {
    this.pagina = "Luna"
    this.mandaDatiEvento5.emit(this.pagina);
  }
}
