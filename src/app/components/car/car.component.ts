import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  name:string;
  speed:number;
  model:string;
  colors:Colors;
  options:string[];
  isEdit:boolean = false;
 
  constructor() { }

  ngOnInit() {
    this.name= "Audi";
    this.speed=250;
    this.model= "RS8";
    this.colors = {
      car:"White",
      salon:"Black",
      wheels:"Silver"
    };
  this.options=["ABS","Climate control", "Autopilot"];
  }
  showEdit(){
    this.isEdit =!this.isEdit;
  }
  addOpt(option){
    this.options.push(option);
    return false;

  }
  deleteOpt(option){
    for(let i=0; i < this.options.length; i++){
      if(this.options[i] == option){
        this.options.splice(i,1);
        break;
      }
    }
  }
  carSelect(carName){
    if(carName=="bmw"){
      this.name= "BMW";
      this.speed=185;
      this.model= "M5";
      this.colors = {
        car:"Red",
        salon:"White",
        wheels:"Black"
      };
    this.options=["ABS","Climate control", "Autopilot"];
    }else if (carName=="audi"){
      this.name= "Audi";
      this.speed= 180;
      this.model= "RS8";
      this.colors = {
        car:"White",
        salon:"Black",
        wheels:"Silver"
      };
      this.options=["Climate control", "Auto parking"]; 
    }else{
      this.name= "Mercedes";
      this.speed= 150;
      this.model= "C180";
      this.colors = {
        car:"Blue",
        salon:"Blue",
        wheels:"Silver"
      };
    this.options=["ABS", "Autopilot"];
    }
  }
}

interface Colors{
  car:string,
  salon:string,
  wheels:string
}