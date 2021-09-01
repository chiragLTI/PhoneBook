export class Contact{
    firstName:string;
    lastName:string;
    contactNumber:number;

    constructor(fname:string, lname:string, contactNum:number){
        this.firstName = fname;
        this.lastName = lname;
        this.contactNumber = contactNum;
    }
}