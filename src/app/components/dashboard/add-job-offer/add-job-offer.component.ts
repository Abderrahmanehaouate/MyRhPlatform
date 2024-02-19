import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-job-offer',
  templateUrl: './add-job-offer.component.html',
  styleUrls: ['./add-job-offer.component.css']
})
export class AddJobOfferComponent implements OnInit {

  dialogData: any;
  title: String = "Add Job Offer";
  constructor(private formBuilder:FormBuilder,
              private matdialog:MatDialogRef<AddJobOfferComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.dialogData = this.data;
    this.title = this.dialogData.title;
  }

  jobOfferForm: FormGroup = this.formBuilder.group({
    title: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    salary: this.formBuilder.control(''),
    location: this.formBuilder.control(''),
    email: this.formBuilder.control(''),
    phone: this.formBuilder.control(''),
    city: this.formBuilder.control(''),
    educationLevel: this.formBuilder.control(''),
    company: {
      id: 1,
    }
  })

  AddJobOffer(){
    console.log(this.jobOfferForm.value);
    if (this.jobOfferForm.valid){

    }
  }

  closeDialog(){
    this.matdialog.close();
  }

}
