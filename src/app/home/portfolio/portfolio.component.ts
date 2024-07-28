import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VuejsModalComponent } from './vuejs-modal/vuejs-modal.component';
import { WebSiteEchezModalComponent } from './web-site-echez-modal/web-site-echez-modal.component';
import { StreamingNetflixModalComponent } from './streaming-netflix-modal/streaming-netflix-modal.component';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  themeSelected:any = ''
  selectedSection:string = "new";
  //description:string="Hola desde el padre"
  constructor(
    public modalService:NgbModal,
    private themeService: ThemeService
  ){

  }

  ngOnInit(): void {
    this.themeService.themeSelected$.subscribe(theme => {
      this.themeSelected = theme;
    });
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
