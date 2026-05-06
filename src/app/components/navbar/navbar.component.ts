import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // On gère l'ouverture du menu mobile en déclarant la variable par défaut à false
  isMenuOpen=false;
  // fonction toggleMenu la valeur de la variable isMenuOpen change d'état
  toggleMenu() {
    this.isMenuOpen=!this.isMenuOpen;
  }

  // fonction pour scroller doucement vers une section précise
  scrollTo(sectionId:string) {
    this.isMenuOpen = false; //ferme le menu mobile après le click
    const element=document.getElementById(sectionId); //on récupère la section
    if (element) {
      element.scrollIntoView({behavior:'smooth'});
    }
}

}
