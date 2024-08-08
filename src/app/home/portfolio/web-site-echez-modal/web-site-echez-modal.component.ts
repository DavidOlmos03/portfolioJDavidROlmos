import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-web-site-echez-modal',
  templateUrl: './web-site-echez-modal.component.html',
  styleUrls: ['./web-site-echez-modal.component.css']
})
export class WebSiteEchezModalComponent {
  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.close();
  }
}
