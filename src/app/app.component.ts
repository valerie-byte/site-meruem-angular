import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'; // on importe la bibliothèque
// import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from './sections/hero/hero.component';
import { NaissanceComponent } from './sections/naissance/naissance.component';
import { FooterComponent } from './sections/footer/footer.component';
import { RencontreComponent } from './sections/rencontre/rencontre.component';
import { TerminusComponent } from './sections/terminus/terminus.component';
import { CombatComponent } from './sections/combat/combat.component';
import { GungiComponent } from "./sections/gungi/gungi.component";
import { ApprentissageComponent } from './sections/apprentissage/apprentissage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CombatComponent, 
    NavbarComponent, 
    HeroComponent, 
    NaissanceComponent, 
    FooterComponent, 
    RencontreComponent, 
    TerminusComponent, 
    GungiComponent,
    ApprentissageComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'site-Meruem';
  ngOnInit(){
    AOS.init({
      duration:1200, //durée animation en ms
      once:false, //false l'animation se répète
      mirror:true //l'animation se rejoue en remontant la page
    })
  }
    
}
