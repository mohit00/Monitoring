import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BsModalRef } from 'ngx-bootstrap/modal';
import 'quill-mention';
import 'quill-emoji';
import {Service} from '../Service/Services';
@Component({
  selector: 'app-note-model',
  templateUrl: './note-model.component.html',
  styleUrls: ['./note-model.component.scss']
})
export class NoteModelComponent implements OnInit {

  constructor(private _bsModalRef: BsModalRef, private service: Service) {
    this.onClose = new Subject();

  }
  public onClose: Subject<boolean>;
  htmlText = '';
  hasFocus = false;

  atValues = [
    { id: 1, value: 'Fredrik Sundqvist', link: 'https://google.com' },
    { id: 2, value: 'Patrik Sjölin' }
  ];
  hashValues = [
    { id: 3, value: 'Fredrik Sundqvist 2' },
    { id: 4, value: 'Patrik Sjölin 2' }
  ];

  quillConfig = {
     toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['code-block'],
        [{ header: 1 }, { header: 2 }],               // custom button values
        [{ list: 'ordered'}, { list: 'bullet' }],
        [{ script: 'sub'}, { script: 'super' }],      // superscript/subscript
        [{ indent: '-1'}, { indent: '+1' }],          // outdent/indent
        [{ direction: 'rtl' }],                         // text direction

        [{ size: ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ['clean'],                                         // remove formatting button
         ['emoji'],
      ],
      handlers: {emoji() {}}
    },
     mention: {
       source: (searchTerm, renderList, mentionChar) => {
        let values;
        if (mentionChar === '@') {
          values = this.atValues;
        } else {
          values = this.hashValues;
        }
 // tslint:disable-next-line: no-trailing-whitespace
        if (searchTerm.length === 0) {
          renderList(values, searchTerm);
        } else {
          const matches = [];
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < values.length; i++) {
            // tslint:disable-next-line: no-bitwise
            if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) { matches.push(values[i]); }
          }
          renderList(matches, searchTerm);
        }
      },
    },
    'emoji-toolbar': true,
    'emoji-textarea': false,
    'emoji-shortname': true,
    keyboard: {
      bindings: {
        // shiftEnter: {
        //   key: 13,
        //   shiftKey: true,
        //   handler: (range, context) => {
        //     // Handle shift+enter
        //     console.log("shift+enter")
        //   }
        // },
        enter: {
          key: 13,
          handler: (range, context) => {
            console.log('enter');
            return true;
          }
        }
      }
    }
  };
  data: any = {};
title: any;
  test = (event) => {
    console.log(event.keyCode);
  }
  onSelectionChanged = (event) => {
    if (event.oldRange == null) {
      this.onFocus();
    }
    if (event.range == null) {
      this.onBlur();
    }
  }
  onContentChanged = (event) => {
    // console.log(event.html);
  }
  onFocus = () => {
    console.log('On Focus');
  }
  onBlur = () => {
    console.log('Blurred');
  }
  ngOnInit() {

    if (this.title == 'false') {

    } else if (this.title == 'true') {
       this.htmlText = this.data.remark;
    }
  }
  addNote() {
     const dataJson = {
      token_id: this.service.getLoginDetail.resources[0].token_id,
      remark: this.data.remark,
      consumerName: this.service.getLoginDetail.login_id,
      userId: this.service.getLoginDetail.user_id,
      status:'0'
    };
     this.service.AddNotes(dataJson).subscribe(res => {
     this._bsModalRef.hide();
     this.onClose.next(true);
     });
  }
  updateNote() {
    this.data.consumerName = this.service.getLoginDetail.login_id;
    this.data.token_id =  this.service.getLoginDetail.resources[0].token_id;
    this.data.userId = this.service.getLoginDetail.user_id;
    console.log(JSON.stringify(this.data));
    this.service.updateNote(this.data).subscribe(res => {

      this._bsModalRef.hide();
      this.onClose.next(true);
    });
  }
  onCancel() {
    this._bsModalRef.hide();
  }
}
