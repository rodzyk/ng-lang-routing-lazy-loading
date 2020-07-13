import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  result: any = null;

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get("//showuapi.rodzyk.com/client/products?lang=en&skip=0&take=10&sort_by=rating&manufacturer_id=1&desc=DESC");
  }
}
