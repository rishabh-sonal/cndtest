import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-makes',
  templateUrl: './makes.component.html'
})
export class MakesComponent implements OnInit {
  makes: any;
  selectedMake: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.dataService.getMakes().then((makes) => {
      this.makes = makes;
    });
  }

}
