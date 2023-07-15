import { Component, OnInit } from '@angular/core';
import CarsDataJson from '../../components/carsData.json';


interface CARS {
  id: Number,
  modelName?:String,
  oldPrice?:String,
  currentPrice?:String,
  priceOff?:String,
  oldEmi?:String,
  newEmi?:String,
  year?:Number,
  traveledDistance?:String,
  owner?:String,
  carNo?:String,
  carType?:String,
  gasType?:String,
  imageUrl?:Array<string>,
}

@Component({
  selector: 'app-car-cards-group',
  templateUrl: './car-cards-group.component.html',
  styleUrls: ['./car-cards-group.component.scss']
})
export class CarCardsGroupComponent implements OnInit {

  carsData: CARS[] = CarsDataJson;
  constructor(){
    console.log(this.carsData);
  }

  ngOnInit(): void {
  }

}
