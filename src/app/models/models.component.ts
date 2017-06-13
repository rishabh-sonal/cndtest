import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html'
})
export class ModelsComponent implements OnInit, OnChanges {
  models: any;
  model: any;
  @Input() make: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.dataService.getModels(this.make).then((models) => {
      this.models = models;
    });
    this.model = null;
  }
  getModel(model) {
    this.model = this.models.find((m) => {
      return m.model === model;
    });
  }
  ngOnChanges(changes) {
    console.log(changes);
    if (changes.make && changes.make.currentValue !== changes.make.previousValue) {
      this.getData();
    }
  }
}
