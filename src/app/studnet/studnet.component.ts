import { Component, OnInit } from '@angular/core';

import { FormBuilder,NgForm , FormGroup, FormControl, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormControlName } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-studnet',
  templateUrl: './studnet.component.html',
  styleUrls: ['./studnet.component.css']
})
export class StudnetComponent implements OnInit {

  myGroup:FormGroup;

  constructor( public form: FormBuilder) {}

  ngOnInit() {  
  this.buildForm();
  } 

  public buildForm() {
    this.myGroup = new FormGroup ({
      firstName:new FormControl( '', Validators.required),
      lastName:new FormControl('',[Validators.maxLength(3)])
    });
  }
  

       public  Save(form: FormGroup){
          if(form.valid)
          {
            console.log("Form is  valid");
            console.log("Save funcation called"+form.value.firstName);
            let formData={
              firstName: form.value.firstName,
              lastName:form.value.lastName
            }
            
          } 
          else{
            console.log("Form is not valid");
            console.log("markAsTouched:"+form.controls.firstName.markAsDirty());
        console.log("Last Name is not valid: "+form.controls.lastName.markAsDirty());
          }
           
           

            if (!this.myGroup.dirty)  {
                alert(`Name: ${this.myGroup.value.firstName} Email: ${this.myGroup.value.firstName}`);
            }

            if(this.myGroup.valid){
              alert(`Name Valid: ${this.myGroup.value.firstName} `);
            }
        
       }


}
