import { Component } from "@angular/core";
import {User} from "./user";




@Component({
    selector:'users',
    templateUrl:'users.component.html',
    styleUrls:['user.component.css']
})


export class UsersComponent   {
    users=[
        new User("Nitin","Pune", 99999999999),
        new User("Virat","Delhi", 8888888888),
        new User("Rohit","Pune", 99999999999),
        new User("Sachin","Mumbai", 7777777777),
        new User("Sourav","Kolkata", 99999999999),
        new User("Ajay","Delhi", 8888888888)
    ];

    user:User;
    
    constructor(){}

    onSelect(selectedUser:User){
        this.user= selectedUser;
    }

}