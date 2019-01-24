import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any[]=[];
errorMessage:string='Loading';
  constructor(private userService:ServicesService) {

   }

  ngOnInit() {
         this.userService.getAllUsers().subscribe((data)=>{
           this.users=data;
         },(err)=>{this.errorMessage ="some" }
         
             
  );
  }

}
