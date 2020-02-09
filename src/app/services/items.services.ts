import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ItemsComponent} from "../components/items/items.component";
import {Items} from "../components/models/items";
import {map} from "rxjs/operators";


@Injectable()
export class itemsService {
  public url:string = 'http://localhost:8080/items/';
  constructor(private http: HttpClient){}

  getItem(): Observable<ItemsComponent[]>{
    return this.http.get(this.url).pipe(
      map(response => response as ItemsComponent[])
    );
  }
  setItem(Item):Observable<any>{
    let json = JSON.stringify(Item);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url,json,{headers:headers});
  }
  addItemsToStock(Quantity,id):Observable<any>{

    let json = JSON.stringify(Quantity);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url+id+"/add/"+Quantity,json,{headers:headers});
  }
  removeItemsFromStock(Quantity,id):Observable<any>{

    let json = JSON.stringify(Quantity);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url+id+"/remove/"+Quantity,json,{headers:headers});
  }
  deleteItem(itemId):Observable<any>{
    return this.http.delete(this.url+itemId);
  }
}
