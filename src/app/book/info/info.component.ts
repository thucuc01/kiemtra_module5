import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {MyService} from '../../service/my-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  id: number=0;
  book: Book={};
  constructor(private employeeService:MyService,private router : Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.book={};
    this.getAll()
  }

  getAll(){
    this.id = +this.route.snapshot.params['id'];
    this.employeeService.getById(this.id).subscribe(data=>{console.log(data)
        this.book=data},
      error=>console.log(error))
  }

}
