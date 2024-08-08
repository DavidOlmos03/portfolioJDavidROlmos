import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-streaming-netflix-modal',
  templateUrl: './streaming-netflix-modal.component.html',
  styleUrls: ['./streaming-netflix-modal.component.css']
})
export class StreamingNetflixModalComponent {
  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.close();
  }
}
