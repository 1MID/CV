import { Component, OnInit } from '@angular/core';  
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-technology-stack',
  templateUrl: './technology-stack.component.html',
  styleUrls: ['./technology-stack.component.scss']
})
export class TechnologyStackComponent implements OnInit { 
  public dbList:Observable<any>[] | undefined;

  constructor(public DB:AngularFireDatabase) {
 
  }

  ngOnInit(): void {
    const itemsRef:AngularFireList<any> = this.DB.list('Angular');
    itemsRef.valueChanges().subscribe(res=>{
      this.dbList = res ; 
      console.log(res)
    })
  }
  
}
