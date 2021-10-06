import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { CollapseComponent } from 'angular-bootstrap-md';

@Component({
  selector: 'app-collapse-item',
  templateUrl: './collapse-item.component.html',
  styleUrls: ['./collapse-item.component.scss']
})

export class CollapseItemComponent implements OnInit {
  @Input() theme: string = "";
  @Input() list: IPostList = {};
  public keys: string[] | undefined;

  postNameArr: [] | undefined;
  postUrlArr: [] | undefined;

  @ViewChildren(CollapseComponent) postList: CollapseComponent[] | undefined;

  topicShouldShow = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    // console.log(this.theme,this.list)
    if (this.list != undefined) {
      this.topicShouldShow = true;
      this.keys = Object.keys(this.list)
    }
  }

  // togglePostList() {
  //   if (this.postList) {
  //     this.postList.forEach((collapse: CollapseComponent) => {
  //       collapse.toggle();
  //     });
  //   }
  // }

}


interface IPostList {
  [key: string]:
  {
    name: string,
    url: string
  }
}
