import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VuejsModalComponent } from './vuejs-modal/vuejs-modal.component';
import { WebSiteEchezModalComponent } from './web-site-echez-modal/web-site-echez-modal.component';
import { StreamingNetflixModalComponent } from './streaming-netflix-modal/streaming-netflix-modal.component';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  selectedSection:string = "new";
  //description:string="Hola desde el padre"
  constructor(
    public modalService:NgbModal
  ){

  }

  mostrarModal(modalName:any){

    if(modalName=='VuejsModal'){
      const modalRef = this.modalService.open(VuejsModalComponent,{centered:true,size:'md'})
      //modalRef.componentInstance.description = this.description;
    }else if(modalName=='WebSiteEchezModal'){
      this.modalService.open(WebSiteEchezModalComponent,{centered:true,size:'md'})
    }else if(modalName=='StreamingNetflixModal'){
      this.modalService.open(StreamingNetflixModalComponent,{centered:true,size:'md'})
    }

  }
}
