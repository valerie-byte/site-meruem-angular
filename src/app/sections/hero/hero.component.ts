import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  scrollVerNaissance() {
    //recherche de l'élément id naissance
    const sectionNaissance = document.getElementById('birth');
    if (sectionNaissance) {
      sectionNaissance.scrollIntoView ({
        behavior:'smooth', //défilement fluide
        block:'start' //aligne le haut de la section
      })
    }
  }

}
