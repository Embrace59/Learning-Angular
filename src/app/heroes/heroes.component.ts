import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES
  selectedHero!:Hero

  public personInfo:any = {
    username:'fuck',
    gender: '1',
    cityList:['北京', '上海', '广州'],
    city:'北京'
  }

  constructor() { }

  //The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. 
  //It's a good place to put initialization logic.
  ngOnInit(): void {
  }

  onSelect(hero:Hero): void{
    this.selectedHero = hero
  }

  doSubmit(){
    console.log(this.personInfo)
  }

}
