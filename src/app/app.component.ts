import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DonutComponent } from './components/donut/donut.component';
import { DetaileddonutComponent } from './components/detaileddonut/detaileddonut.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DonutComponent, DetaileddonutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab-Donuts';
}
