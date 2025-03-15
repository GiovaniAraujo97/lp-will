import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  navigateTo(sectionId: string) {
    console.log(`Clicou no card: ${sectionId}`); // Verifique se isso aparece no console
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`Elemento com ID '${sectionId}' não encontrado.`);
    }
  }
}