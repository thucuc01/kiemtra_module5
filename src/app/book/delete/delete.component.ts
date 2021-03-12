import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {MyService} from '../../service/my-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
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
    this.employeeService.delete(this.id).subscribe(
      ()=> {
        alert("Xoa thanh cong")
        this.book={};
        this.router.navigate(['/list'])
      },
      error => alert("Xoa that bai"));
  }


}
