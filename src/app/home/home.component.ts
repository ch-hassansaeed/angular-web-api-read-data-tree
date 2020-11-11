import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';

import { HttpClient } from '@angular/common/http';




@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];
    category_items:any =[];


    constructor(private http: HttpClient) { 
        var url="http://208.109.13.111:9090/api/Category";
        //get json from API url
        this.http.get(url).subscribe(
            data => {
                      console.log("I CAN SEE JSON DATA HERE: ", data);
                      this.category_items = data["result"];
                     }
        ); 
    }

    parent_click(el){
        //alert(el);
        // alert("register click event for categories");
                            //tree item click logic
                            //var toggler = document.getElementsByClassName("caret");
                            //var i;

                           // for (i = 0; i < toggler.length; i++) {
                            //toggler[i].addEventListener("click", function() {
                                el.parentElement.querySelector(".nested").classList.toggle("active");
                                el.classList.toggle("caret-down");
                            //});
                           // }
                            //this.myFunc(this);
      }

     

    ngOnInit() {
        this.loading = true;
        //this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
          //  this.users = users;


        




    }
}
