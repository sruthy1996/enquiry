import { Component, OnInit } from '@angular/core';
import { EnquiryService} from '../services/enquiry.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addenquiry',
  templateUrl: './addenquiry.component.html',
  styleUrls: ['./addenquiry.component.css']
})
export class AddenquiryComponent implements OnInit {
  enquiryForm;

  constructor(private router: Router, private fb: FormBuilder,
    private enquiryService: EnquiryService) {
    this.enquiryForm = fb.group({
      firstName: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      lastName: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email,
        Validators.minLength(5)
      ]),
      phone: new FormControl('',[
        Validators.required,
        Validators.minLength(10)
      ]),
      comment: new FormControl('',[
        Validators.required,
        Validators.minLength(10)
      ]),
    });
  }
  

  ngOnInit() {
  }

  add(){
    
    if(!this.enquiryForm.valid){
      console.log(this.enquiryForm);
      alert("You have an error")
      //this.commonService.showError();
      return;
    }
    this.enquiryService.saveEnquiry(this.enquiryForm.value)
      .subscribe(data=>{
        //alert("success");
        this.enquiryForm.reset();
        this.router.navigate(['']);
      });

      
    }
  /*get(name){
    return this.enquiryForm.get(name);
  }
  hasError(name){
    return this.get(name).errors && (this.get('name').dirty || this.get('name').touched)
  }*/
}
