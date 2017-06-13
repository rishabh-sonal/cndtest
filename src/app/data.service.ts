import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  getMakes() {
    return this.http.get(`https://mqhn735g8d.execute-api.us-east-1.amazonaws.com/makes`)
      .toPromise()
      .then((res) => {
        return res.json().filter((make) => {
          return make.is_in_navigation;
        });
      });
  }
  getModels(makeid) {
    return this.http.get(`https://mqhn735g8d.execute-api.us-east-1.amazonaws.com/makes/${makeid}`)
      .toPromise()
      .then((res) => {
        console.log(res);
        return res.json().models.filter((model) => {
          return model.is_in_navigation;
        });
      });
  }
}
