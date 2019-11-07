import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalhttpService {

  constructor(private httpclient: HttpClient) {
  }


  postForData(url, param): Promise<any> {
    const header = new HttpHeaders({'Content-Type': 'application/json'});
    return new Promise<any>(
      (resolve, reject) => {
        this.httpclient.post(url, param, {headers: header, withCredentials: true}).subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
      }
    );
  }
}
