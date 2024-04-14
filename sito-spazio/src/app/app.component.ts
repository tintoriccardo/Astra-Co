import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { RazzoComponent } from './razzo/razzo.component';
import { ListComponent } from './list/list.component';
import { MarteComponent } from './marte/marte.component';
import { LunaComponent } from './luna/luna.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IntroductionComponent,NavigationComponent,CommonModule,RazzoComponent,ListComponent,MarteComponent,LunaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sito-spazio';
  pagina: string = "welcome"

  onRiceviDati(value: any){
    console.log(value)
    this.pagina = value
  }
  onRiceviDati2(value: any) {
    console.log(value)
    this.pagina = value
  }
  onRiceviDati3(value: any) {
    console.log(value)
    this.pagina = value
  }
  onRiceviDati4(value: any) {
    console.log(value)
    this.pagina = value
  }
  onRiceviDati5(value: any) {
    console.log(value)
    this.pagina = value
  }
}
