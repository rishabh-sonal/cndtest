/**
 * Created by rishabh on 13/06/17.
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

export class MockDataService {
  mockDataMakes = [
    {
      'make': 'acura',
      'name': 'Acura',
      'is_hidden': false,
      'is_in_navigation': true
    },
    {
      'make': 'ford',
      'name': 'Ford',
      'is_hidden': false,
      'is_in_navigation': true
    }
  ];
  mockDataModels = {
    'make': 'acura',
    'models': [
      {
        'model': 'acura_ilx',
        'name': 'ILX',
        'is_hidden': false,
        'is_in_navigation': true,
        'image': 'http://buyersguide.caranddriver.com/media/assets/submodel/7655.jpg'
      },
      {
        'model': 'acura_mdx',
        'name': 'MDX',
        'is_hidden': false,
        'is_in_navigation': true,
        'image': 'http://buyersguide.caranddriver.com/media/assets/submodel/7631.jpg'
      }
    ]
  };
  constructor() { }
  getMakes() {
    return new Observable()
      .toPromise()
      .then(() => {
        return this.mockDataMakes;
      });
  }
  getModels(makeid) {
    return new Observable()
      .toPromise()
      .then(() => {
        return this.mockDataModels;
      });
  }
}
