import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  // heroes = HEROES
  heroes!: Hero[];
  selectedHero!:Hero

  public personInfo:any = {
    username:'fuck',
    gender: '男',
    cityList:['北京', '上海', '广州'],
    city:'广州',
    hobby: [{
      title: '吃饭',
      checked: false
    },
    {
      title: '睡觉',
      checked: true
    },
    {
      title: '玩手机',
      checked: false
    }]
  }

  //1. 声明了一个私有 heroService 属性，
  //2. 把它标记为一个 HeroService 的注入点。
  //当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象。
  constructor(private heroService: HeroService) { }

  //The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. 
  //It's a good place to put initialization logic.
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero:Hero): void{
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  doSubmit(){
    console.log(this.personInfo)
  }

}
