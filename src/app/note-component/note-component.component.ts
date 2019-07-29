import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {NoteModelComponent} from '../note-model/note-model.component';
import {Service} from '../Service/Services';
@Component({
  selector: 'app-note-component',
  templateUrl: './note-component.component.html',
  styleUrls: ['./note-component.component.scss']
})
export class NoteComponentComponent implements OnInit {

 constructor(private modalService: BsModalService,
             private service: Service
  ) {

 }
  bsModalRef: BsModalRef;
 showSuccess: any = false;
noteData: any;
  showUpdateSuccess: any = false;
 addNote() {
  const initialState = {
    title: 'false'
  };
  this.bsModalRef = this.modalService.show(NoteModelComponent,  {initialState, class: 'gray modal-lg' });

  this.bsModalRef.content.onClose.subscribe(result => {
    console.log('results', result);
    this.showSuccess = true;
    this.getNotes();
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
 });
 }
 getNotes() {
   const dataJson = {
    token_id: this.service.getLoginDetail.resources[0].token_id,
    userId : this.service.getLoginDetail.user_id
   };
   this.service.getNote(dataJson).subscribe(res => {
      this.noteData = res.resources;
    });
  }
  editNote(data) {

  const initialState = {
    title: 'true',
    data
  };
  this.bsModalRef = this.modalService.show(NoteModelComponent,  {initialState, class: 'gray modal-lg' });

  this.bsModalRef.content.onClose.subscribe(result => {
    console.log('results', result);
    this.showUpdateSuccess = true;
    this.getNotes();
    setTimeout(() => {
      this.showUpdateSuccess = false;
    }, 3000);
 });

  }
  updateStatus(data, status) {
    data.token_id = this.service.getLoginDetail.resources[0].token_id;
    data.userId =  this.service.getLoginDetail.user_id
    data.status = status;
    this.service.updateNote(data).subscribe(res => {
      this.showUpdateSuccess = true;
      this.getNotes();
      setTimeout(() => {
      this.showUpdateSuccess = false;
    }, 3000);
    });
  }
 ngOnInit() {
   this.getNotes();
}


}
