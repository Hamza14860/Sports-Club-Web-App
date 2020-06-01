import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CourtService } from '../../service/court.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-add-court',
  templateUrl: './add-court.component.html',
  styleUrls: ['./add-court.component.css']
})
export class AddCourtComponent implements OnInit {
  [x: string]: any;
  showSucessMessage: Boolean;
  serverErrorMessages: String;

  constructor(public courtService: CourtService,private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.courtService.postCourt(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
    this.router.navigate(['/view-courts']);
  }

  resetForm(form: NgForm) {
    this.courtService.selectedCourt = {
      CourtNo: null,
      courtName: '',
      gameName: '',
      isFree: 'True'
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
