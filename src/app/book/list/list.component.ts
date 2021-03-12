import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MyService} from "../../service/my-service.service";
import {Book} from '../../model/book';

declare var $:any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  id?: number;
  books : Book []=[];
  dataSource : any;
  @ViewChild(MatPaginator) paginator?: any;
  displayedColumns: string[] = ['id', 'title', 'author','delete','update'];

  constructor(private myService: MyService,private router : Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.myService.getAll().subscribe(value => {
      this.books= value;
      this.dataSource=new MatTableDataSource<Book>(this.books)
      this.dataSource.paginator = this.paginator;
    },val=>console.log(val))
  }


  updateEmployee(id:number|undefined){
    if(id != undefined) {
      this.router.navigate(['/update', id])
    }

  }
  delete(id:number|undefined){
    if(id != undefined) {
      this.router.navigate(['/delete', id])
    }

  }





  find(searchValue: any){
    this.dataSource.filter = searchValue.trim().toLowerCase();
  }


}
