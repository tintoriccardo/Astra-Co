import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  viaggi : any[] = [
   
      {
        destinazione: "Marte",
        sistema: "Sistema Solare",
        durata: "4 mesi",
        dataP: new Date().getTime(),
        dataA: new Date().getTime() + (4 * 30 * 24 * 60 * 60 * 1000),
        distanza: 0.524,
        compagnia: "Stellar Adventures",
        costo: "250000",
        img: 'https://cdn.pixabay.com/photo/2013/02/05/15/18/aircraft-78060_1280.jpg'
      },
      {
        destinazione: "Saturno",
        sistema: "Sistema Solare",
        durata: "1 anno",
        dataP: new Date().getTime(),
        dataA: new Date().getTime() + (365 * 24 * 60 * 60 * 1000),
        distanza: 1.429,
        compagnia: "Cosmic Cruises",
        costo: "750000",
        img: 'https://cdn.pixabay.com/photo/2024/04/06/02/04/spaceship-8678481_1280.jpg'
      },
      {
        destinazione: "Alpha Centauri Bb",
        sistema: "Alpha Centauri",
        durata: "20 anni",
        dataP: new Date().getTime(),
        dataA: new Date().getTime() + (20 * 365 * 24 * 60 * 60 * 1000),
        distanza: 4.37,
        compagnia: "Interstellar Voyages",
        costo: "20000000",
        img: 'https://cdn.pixabay.com/photo/2024/04/06/02/04/spaceship-8678482_1280.jpg'
      },
      {
        destinazione: "Nebulosa di Orione",
        sistema: "Via Lattea",
        durata: "50 anni",
        dataP: new Date().getTime(),
        dataA: new Date().getTime() + (50 * 365 * 24 * 60 * 60 * 1000),
        distanza: 1350,
        compagnia: "Galactic Explorations",
        costo: "50000000",
        img: 'https://cdn.pixabay.com/photo/2024/04/13/08/01/star-wars-8693498_1280.jpg'
      },
      {
        destinazione: "Terra Ombra",
        sistema: "Sistema Nemesi",
        durata: "6 mesi",
        dataP: new Date().getTime(),
        dataA: new Date().getTime() + (6 * 30 * 24 * 60 * 60 * 1000),
        distanza: 0.022,
        compagnia: "Darkside Expeditions",
        costo: "400000",
        img: 'https://cdn.pixabay.com/photo/2024/01/28/17/23/ai-generated-8537970_1280.jpg'
      },
      {
        destinazione: "Xanadu",
        sistema: "Galassia di Andromeda",
        durata: "100 anni",
        dataP: new Date().getTime(),
        dataA: new Date().getTime() + (100 * 365 * 24 * 60 * 60 * 1000),
        distanza: 2500000,
        compagnia: "Andromeda Tours",
        costo: "100000000",
        img: 'https://cdn.pixabay.com/photo/2024/04/06/02/04/spaceship-8678480_1280.jpg'
      },
      {
        destinazione: "Iperione",
        sistema: "Saturno",
        durata: "2 anni",
        dataP: new Date().getTime(),
        dataA: new Date().getTime() + (2 * 365 * 24 * 60 * 60 * 1000),
        distanza: 1.4704,
        compagnia: "Saturnian Travel",
        costo: "900000",
        img: 'https://images.alphacoders.com/111/thumb-1920-111761.jpg'
      }
    ];
    

}
