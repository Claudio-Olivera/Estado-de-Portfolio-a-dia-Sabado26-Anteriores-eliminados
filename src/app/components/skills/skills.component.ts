import { DOCUMENT } from '@angular/common';
import { Component, OnInit, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(@Inject(DOCUMENT)private document:Document) { }

  ngOnInit(): void {
  }
  @HostListener ("window:scroll")//para que funcione import de hostlistener
  funcionDelScroll (){
     const yOffSet = window.pageYOffset;
     const scrollTop = this.document.documentElement.scrollTop;//para que funcione inject en constructor e import de document
     if ((yOffSet || scrollTop) > 1960 && (yOffSet || scrollTop) < 1970 ){

     let circuloA = new Circulos((".valor-one"),(".circulo-one"),(63));
     let circuloB = new Circulos((".valor-two"),(".circulo-two"),(49));
     let circuloC = new Circulos((".valor-three"),(".circulo-three"),(60));
     let circuloD = new Circulos((".valor-four"),(".circulo-four"),(20));
     
    }
   }  

}
class Circulos {
  public progressValue:number = 0;
  public speed: number = 15
  public progressEndValue :number = 0;
  public stopper:any ; 
          constructor(a:string, b:string, st:number){
    
    this.progressEndValue = st
    let stopper=
    setInterval(() => {
      
      let o :any = document.querySelector(a)
      let p :any = document.querySelector(b)
      this.progressValue++;
      o.textContent = `${this.progressValue}%`;
      p.style.background = `conic-gradient(
        #710cfe ${this.progressValue * 3.6}deg,
        #71c9ce ${this.progressValue * 3.9}deg
        )`;
        if (this.progressValue == this.progressEndValue) {
          clearInterval(stopper);
        }
      },this.speed);  
    }
  }
  