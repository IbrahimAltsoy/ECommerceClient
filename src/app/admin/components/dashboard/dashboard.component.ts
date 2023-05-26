import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay } from 'rxjs';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, MessageType, Position, AlertifyOptions } from 'src/app/services/admin/alertify.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(private alertify : AlertifyService, spinner: NgxSpinnerService){
super(spinner);
  }
  ngOnInit(): void {
this.showSpinner(SpinnerType.LineSpinClockwiseFade);
  }
  message(){

    this.alertify.message("saygilar", {
      messageType :MessageType.Success,
      position: Position.BottomLeft,
      delay: 5,
      dismisOthers: false
    });
  }
  dismiss(){
    this.alertify.dismiss();
  }
}
// export class DashboardComponent {
//   constructor(){}
// }
