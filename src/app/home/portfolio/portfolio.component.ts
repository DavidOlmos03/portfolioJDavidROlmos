import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VuejsModalComponent } from './vuejs-modal/vuejs-modal.component';
import { WebSiteEchezModalComponent } from './web-site-echez-modal/web-site-echez-modal.component';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  selectedSection:string = "new";
  constructor(
    public modalService:NgbModal
  ){

  }

  mostrarModal(){
    const modal = this.modalService.open(VuejsModalComponent,{centered:true,size:'md'})
  }

  mostrarModalWebEchez(){
    const modal = this.modalService.open(WebSiteEchezModalComponent,{centered:true,size:'md'})
  }
}
