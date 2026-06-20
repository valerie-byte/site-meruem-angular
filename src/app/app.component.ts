import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'; // on importe la bibliothèque
// import { RouterOutlet } from '@angular/router';
import {Title, Meta} from '@angular/platform-browser'
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
  constructor(private titleService:Title, private metaService:Meta) {}
  
  ngOnInit(){
    AOS.init({
      duration:1200, //durée animation en ms
      once:false, //false l'animation se répète
      mirror:true //l'animation se rejoue en remontant la page
    })

    //définir le titre de l'onglet du navigateur
    this.titleService.setTitle("Meruem - roi des fourmis chimères | hunter x hunter");

    //ajouter les balises meta pour le référencement google
    this.metaService.addTags([
      {name:'description', content:'Découvrez l\'histoire immersive de Meruem, roi des fourmis chimères. De sa naissance terrifiante à sa rédemption auprès de Komugi avec le gungi'},
      {name:'keywords', content:'Meruem, Hunter x Hunter, Komugi, gungi, fourmi chimère, Netero, manga'},
      {name:'author', content:'valerie-byte'},
      {name:'robots', content:'index, follow'} //demande à google d'indexer le site
    ])

//balises open graph  pour discord, x, facebook
        this.metaService.addTags([
      {property:'og :title', content:'Meruem - roi des fourmis chimères'},
      {property:'og :description', content:'Découvrez l\'histoire immersive de Meruem, roi des fourmis chimères. De sa naissance terrifiante à sa rédemption auprès de Komugi avec le gungi'},
      {property:'og :image', content:'https://assets/images.img_partage.png'},
      { property:'og :title', content:'valerie-byte'},
      { property:'og :url, content:’https://site-meruem-angular.vercel.app/'},
      { property:'og :type', content:'website'}
    ])

     //twitter card (spécifique à X)
    this.metaService.addTags([
      {name:'twitter:card', content:'summary_large_image'},
      {name:'twitter:title', content:'Meruem - roi des fourmis chimères'},
      {name:'twitter:description', content:'Découvrez l\'histoire immersive de Meruem, roi des fourmis chimères. De sa naissance terrifiante à sa rédemption auprès de Komugi avec le gungi'},
      {name:'twitter:image', content:'https://site-meruem-angular.vercel.app/'},
    ])

  }

 


  }
    

