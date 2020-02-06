import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnquiryService } from '../services/enquiry.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  title="Enquiry List";
  enquiries:any=[];
  searchForm;
  constructor(private router: Router, private fb: FormBuilder,
    private enquiryService: EnquiryService) {
      this. searchForm = fb.group({
      firstName: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ])
      });
  }

   

  ngOnInit() {
    this.getenquiries();
  }

  getenquiries(){
    this.enquiryService.get()
    .subscribe(data=>{
      this.enquiries=data;
    });
  }
  addEnquiry(){
    this.router.navigate(['add']);
  }

  search(){
     this.enquiryService.search(this.searchForm.value)
    .subscribe((data: any)=>{
      console.log(data);
      this.enquiries=data;
      //this.commonService.setItem('user', data.user);
      this.router.navigate(['']);
    }, err=>{
      alert(err.error.message);
    });
  }
}
