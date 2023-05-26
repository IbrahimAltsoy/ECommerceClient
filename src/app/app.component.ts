import { Component } from '@angular/core';
import { CustomToastrService, MessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';

// declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor(private toastr: CustomToastrService,private spinner: NgxSpinnerService) {

  }
  ngOnInit(): void {
this.spinner.show("s1");
setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide("s1");
}, 2000);
  }
  message(){
this.toastr.message("Ibrajim", "dfggdf", {messageType: MessageType.Success, toastrPosition:ToastrPosition.BottomFullWidth })
// this.toastr.message("Ibrajim", "dfggdf", MessageType.Success, ToastrPosition.BottomLeft)
// this.toastr.message("Ibrajim", "dfggdf", MessageType.info, ToastrPosition.TopCenter)
// this.toastr.message("Ibrajim", "dfggdf", MessageType.Warning, ToastrPosition.TopRight)
// this.toastr.message("Ibrajim", "dfggdf", MessageType.Warning, ToastrPosition.BottomFullWidth)
// this.toastr.message("Ibrajim", "dfggdf", MessageType.Warning, ToastrPosition.TopFullWidth)

    // this.toastr.message("saygilar", {
    //   messageType :MessageType.Success,
    //   position: Position.BottomLeft,
    //   delay: 5,
    //   dismisOthers: false
    }
  }

// $(document).ready(()=>{
//   alert("Merhaba")
// })
