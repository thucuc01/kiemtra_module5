import { Component, OnInit } from '@angular/core';
import {MyService} from "../../service/my-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from '../../model/book';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

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

  onSubmit(){
    this.employeeService.update(this.id,this.book).subscribe(
      ()=> {
        alert("Update thanh cong")
        this.book={};
        this.router.navigate(['/list'])
      },
      error => alert("Update that bai"));
  }
}
