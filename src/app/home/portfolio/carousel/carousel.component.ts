import { ChangeDetectionStrategy, Component, OnInit, HostListener,inject, PLATFORM_ID, NgIterable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CommonModule, NgFor, NgIf, isPlatformBrowser} from '@angular/common';
import {TuiIcon, TuiButton} from '@taiga-ui/core';
import {TuiCarousel, TuiPagination} from '@taiga-ui/kit';
import { StreamingNetflixModalComponent } from '../streaming-netflix-modal/streaming-netflix-modal.component';
import { VuejsModalComponent } from '../vuejs-modal/vuejs-modal.component';
import { WebSiteEchezModalComponent } from '../web-site-echez-modal/web-site-echez-modal.component';



@Component({
  selector: 'app-carousel',
  standalone:true,
  imports:[
    TuiCarousel,
    TuiIcon,
    TuiPagination,
    CommonModule,
    // TuiButton,
    NgFor,
    NgIf
  ],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css','./carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit{
    // private index = 0;
    protected index = 0;
    // protected duration = isPlatformBrowser(inject(PLATFORM_ID)) ? 4_000 : 0;
    // protected rounded = 0;
    protected itemsCount = 3;

    constructor(
      public modalService:NgbModal,
    ){ }

    // Revisa el cambio en el tamaño de la ventana
    ngOnInit(): void {
      this.setItemsCount(window.innerWidth);
      // console.log(this.items)
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
      const width = (event.target as Window).innerWidth;
      this.setItemsCount(width);
    }

    private setItemsCount(width: number): void {
      if (width <= 768) {
        this.itemsCount = 1;
      } else if (width <= 1200) {
        this.itemsCount = 2;
      } else {
        this.itemsCount = 3;
      }
    }



    protected readonly items = [
        {
          title: 'Laravel-Angular', Image: 'laravel-angular-course.jpg', subtitle: 'Tecnologías',
          linkGit: 'https://github.com/DavidOlmos03/streaming_tipo-netflix',
          btnModal: 'StreamingNetflixModal',
          icons:{
            html5:'HTML5',
            css:'CSS',
            bootstrap:'Bootstrap',
            angular:'Angular',
            laravel:'Laravel',
            php:'PHP'
          }
        },

        {
          title: 'Vue js', Image: 'vuejs-course.jpg', subtitle: 'Tecnologías',
          linkGit: 'https://github.com/DavidOlmos03/course-vuejs/tree/main',
          btnModal: 'VuejsModal',
          icons:{
            vuejs:'VueJS',
            css:'CSS',
            tailwind:'Tailwind',
            firebase:'Firebase',
            expressjs:'Express',
            nodejs:'NodeJs',
            mongodb: 'mongoDB'
          }
        },

        {
          title: 'DevNotes', Image: 'devNotes.png', subtitle: 'Tecnologías',
          linkGit: 'https://github.com/DavidOlmos03/portfolioJDavidROlmos/tree/main/src/app/home/portfolio/dev-notes',
          btnPage: 'https://davidolmos-portfolio.netlify.app/dev-notes/angular',
          icons:{
            html5:'HTML5',
            css:'CSS',
            bootstrap:'Bootstrap',
            angular:'Angular'
          }
        },

        {
          title: 'Docker', Image: 'docker-wall-1.jpeg', subtitle: 'Tecnologías',
          icons:{
            docker:'DOCKER'
          }
        },

        {
          title: 'Python', Image: 'python-course.jpg', subtitle: 'Tecnologías',
          linkGit: 'https://github.com/DavidOlmos03/cursoPythonHectorC',
          icons:{
            python:'Python'
          }
        },

        {
          title: 'mongoDB', Image: 'courseMongodb.jpg', subtitle: 'Tecnologías',
          btnCertificate: 'assets/docs/certificados/mongoDB.pdf',
          icons:{
            mongodb:'mongoDB'
          }
        },

        {
          title: 'javaScript', Image: 'course-1.png', subtitle: 'Tecnologías',
          linkGit: 'https://github.com/DavidOlmos03/Udemy_CursoJS',
          btnPage: 'https://davidolmos-portfolio.netlify.app/course-js',
          btnCertificate: 'assets/docs/certificados/javaScriptFG.pdf',
          icons:{
            html5:'HTML5',
            css:'CSS',
            javascript:'javaScript'
          }
        },

        {
          title: 'SQL Server', Image: 'courseSQLServer.jpg', subtitle: 'Tecnologías',
          btnCertificate: '',
        },

        {
          title: 'postgreSQL', Image: 'coursePostgreSQL.png', subtitle: 'Tecnologías',
          btnCertificate: 'assets/docs/certificados/postgreSQL.pdf',
        },

        {
          title: 'SQL', Image: 'courseSQL.jpg', subtitle: 'Tecnologías',
          btnCertificate: 'assets/docs/certificados/SQL.pdf',
        },

        {
          title: 'mundoSteam', Image: 'mundoSteam.png', subtitle: 'Tecnologías',
          linkGit: 'https://github.com/DavidOlmos03/mundoStem',
          btnPage: 'https://mundostem.netlify.app/',
          icons:{
            html5:'HTML5',
            css:'CSS',
            angular:'Angular',
            python:'Python',
            typescript:'typeScript'
          }
        },

        {
          title: 'webSiteEchez', Image: 'webSiteEchez.png', subtitle: 'Tecnologías',
          linkGit: 'https://github.com/DavidOlmos03/webSiteEchez',
          btnModal: 'WebSiteEchezModal',
          icons:{
            html5:'HTML5',
            css:'CSS',
            javascript:'javaScript',
            php:'PHP'
          }
        },
    ];

    protected get rounded(): number {
      return Math.floor(this.index / this.itemsCount);
    }

    protected onIndex(index: number): void {
      this.index = index * this.itemsCount;
      // this.rounded = Math.round(index);
    }


    protected mostrarModal(modalName:any){
      // console.log(modalName)
      if(modalName=='VuejsModal'){
        const modalRef = this.modalService.open(
          VuejsModalComponent,
          {centered:true,size:'md'}
        )
        //modalRef.componentInstance.description = this.description;
      }else if(modalName=='WebSiteEchezModal'){
        this.modalService.open(
          WebSiteEchezModalComponent,
          {centered:true,size:'lg'}
        )
      }else if(modalName=='StreamingNetflixModal'){
        this.modalService.open(
          StreamingNetflixModalComponent,
          {centered:true,size:'lg'}
        )
      }

    }
}
