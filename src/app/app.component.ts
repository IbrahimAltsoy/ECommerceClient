import { Component } from '@angular/core';
import { CustomToastrService, MessageType, ToastrPosition } from './services/ui/custom-toastr.service';

// declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor(private toastr: CustomToastrService) {

  }
  ngOnInit(): void {

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
