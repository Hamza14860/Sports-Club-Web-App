import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/session.service';
import { Router } from "@angular/router";
import { Session } from 'src/app/model/session.model';
@Component({
  selector: 'app-sched',
  templateUrl: './sched.component.html',
  styleUrls: ['./sched.component.css']
})
export class SchedComponent implements OnInit {

  constructor(public session:SessionService,public router:Router) { }

  ngOnInit(): void {
    this.session.getSession('2020-5-31','hamza@example.com');
  }

}
