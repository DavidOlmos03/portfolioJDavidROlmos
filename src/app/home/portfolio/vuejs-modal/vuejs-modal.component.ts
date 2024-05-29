import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-vuejs-modal',
  templateUrl: './vuejs-modal.component.html',
  styleUrls: ['./vuejs-modal.component.css']
})
export class VuejsModalComponent {
    // @Input() description:string = ''

    // ngOnInit(){
    //   console.log(this.description)
    // }
    constructor(public activeModal: NgbActiveModal) {}

    closeModal() {
      this.activeModal.close();
    }
}
