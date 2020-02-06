import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }
  @Input() field: String;
  @Input() formGroup: any;

  ngOnInit() {
    console.log(this.formGroup);
    console.log(this.field);
  }
  get(name){
    return this.formGroup.get(name)||{};
  }
  hasError(name){
    return this.get(name).errors && (this.get(name).dirty || this.get(name).touched)
  }
}
