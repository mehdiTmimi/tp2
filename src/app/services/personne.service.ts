import { Injectable } from '@angular/core';
import { Personne } from '../models/Personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private personnes:Array<Personne>;
  constructor() {
    this.personnes=new Array<Personne>();
    this.personnes.push(new Personne("tmimi","mehdi","04-06-1992"));
    this.personnes.push(new Personne("alaoui","omar","05-12-2000"));
   }
   public addPeronne(personne:Personne):void{
      this.personnes.push(personne);
   }
   public getPersonnes():Array<Personne>{
     return this.personnes;
   }
}
