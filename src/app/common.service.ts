import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private api = 'https://mailthis.to/codeninja';

  constructor(private http: HttpClient) { }
  postContactForm(input: any) {
    return this.http.post(this.api, input, {responseType: 'text'})
    .pipe(
      map( (res) => {
        if(res) {
          return res;
        } else {
          return null;
        }
      }, (error:any) => {
        return error;
      })
    )
  }
}
