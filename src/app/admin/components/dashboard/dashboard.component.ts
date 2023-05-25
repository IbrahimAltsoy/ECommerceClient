import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { AlertifyService, MessageType, Position, AlertifyOptions } from 'src/app/services/admin/alertify.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private alertify : AlertifyService){}
  ngOnInit(): void {

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
