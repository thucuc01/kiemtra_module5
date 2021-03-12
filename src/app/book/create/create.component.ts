import { Component, OnInit } from '@angular/core';
import {MyService} from "../../service/my-service.service";
import {Router} from "@angular/router";
import {Book} from '../../model/book';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book : Book={};
  constructor(private myService: MyService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    if(!form.invalid){
      this.myService.create(this.book).subscribe(
        ()=> {
          alert("thanh cong")
          this.book = {};
          this.router.navigate(['/list'])
        },() => alert("that bai"));
    }
  }

}
