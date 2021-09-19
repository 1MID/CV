import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectBridgeService {

  constructor() { }

  // 讓Main-content知道Side-bar被點擊了
  private routeToSection = new BehaviorSubject(0);
  routeToSection$ = this.routeToSection.asObservable();
  routeToSectionChange(index: number) {
    this.routeToSection.next(index)
  } 
  
}
