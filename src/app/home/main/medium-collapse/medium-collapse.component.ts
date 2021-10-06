import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medium-collapse',
  templateUrl: './medium-collapse.component.html',
  styleUrls: ['./medium-collapse.component.scss']
})
export class MediumCollapseComponent implements OnInit {
  public dbMediumPostTheme: string[] | undefined;
  public dbMediumPostList = [{}];
  public updateTime: any[] | undefined;

  constructor(public DB: AngularFireDatabase) {

  }

  ngOnInit(): void {
    this.getMediumPost();
    this.getUpdateTime();
  }

  getUpdateTime(){
    const itemsRef:AngularFireList<any> = this.DB.list('UpdateTime');
    itemsRef.valueChanges().subscribe( res=>{
      this.updateTime = res ;
    })
  }

  getMediumPost() {
    const itemsRef: AngularFireList<any> = this.DB.list('Medium');

    let dbList: Observable<any>[] | undefined;
    let dbListKeys: string[] | undefined;
    this.dbMediumPostTheme = [];
    this.dbMediumPostList = [{}];



    itemsRef.valueChanges().subscribe(res => {
      /**
        * 0.取得所有Config的Index，因為res撈下來後Config與其他Class會混亂
        */
      let configIndex = -1;
      for (let i = 0; i < res.length; i++) {
        if (typeof res[i][0] == 'string') { configIndex = i; break; }
      }

      /**
        * 1.取得所有Config中的主題
        */
      dbList = res[configIndex];
      //console.log('Json資料:',dbList)

      dbListKeys = Object.keys(res[configIndex]);
      //console.log('keys:',dbListKeys)

      for (let i = 0; i < dbListKeys.length; i++) {
        this.dbMediumPostTheme?.push(res[configIndex][dbListKeys[i]])
      }
      console.log('所有文章種類:', this.dbMediumPostTheme)


      /**
       * 2.取得特定主題的所有文章
       */
      this.dbMediumPostTheme?.forEach(theme => {

        for (let i = 0; i < res.length; i++) {
          if ((res[i][-1]) == theme) {
            delete res[i][-1] //拿完索引對應的值，之後用不到了
            this.dbMediumPostList?.push(res[i]);
          }
        }
      });
      console.log('文章資料:',this.dbMediumPostList)
    })



  }


}
