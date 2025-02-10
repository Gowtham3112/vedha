import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  public setname(name: any) {
    window.sessionStorage.setItem('name',name);
  }
  
  public getname(): any {
    return  sessionStorage.getItem('name');
  }

  public setActibeMAT(actibeMAT: any) {
    window.sessionStorage.setItem('actibeMAT',actibeMAT);
  }
  
  public getActibeMAT(): any {
    return  sessionStorage.getItem('actibeMAT');
  }

}
