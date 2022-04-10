import { Component, OnInit ,Input} from '@angular/core';
import { Car } from '../interface/interface';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
car:Car = {car:'',photo:''}
  constructor() { }

  ngOnInit(): void {
  }

}
