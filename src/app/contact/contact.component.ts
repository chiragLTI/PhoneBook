import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:Contact;
  closeResult:string;
  fname:string;
  lname:string;
  contactNum:number;
  searchedKeyword: string;

  contactArray:Contact[]=[];
  constructor(private modalService: NgbModal) { 
    this.contact = new Contact("Chirag","Nagpal",9284243714);
    this.contactArray.push(this.contact);
    this.contact = new Contact("Mohit","Nagpal",8284243714);
    this.contactArray.push(this.contact);
    this.contact = new Contact("Varun","Nagpal",7284243714);
    this.contactArray.push(this.contact);
    this.contact = new Contact("Girish","Nagpal",8884243714);
    this.contactArray.push(this.contact);
    this.contact = new Contact("Sonu","Nagpal",9887243714);
    this.contactArray.push(this.contact);
    
  }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  deleteContact(phoneNum:Number):void{
    for (let index = 0; index < this.contactArray.length; index++) {
      if(this.contactArray[index].contactNumber == phoneNum){
        this.contactArray.splice(index,1);
      }
      
    }
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(f: NgForm) {
    this.contact = new Contact(f.value.firstname,f.value.lastname,f.value.phoneNumber);
    this.contactArray.push(this.contact);
    this.modalService.dismissAll(); //dismiss the modal
  }

}
