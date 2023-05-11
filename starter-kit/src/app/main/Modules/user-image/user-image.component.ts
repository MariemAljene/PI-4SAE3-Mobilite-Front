import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService, UserService} from "../../../auth/service";
import {Subject} from "rxjs";
import {User} from "../../../auth/models";
import {Image} from "../../../auth/models/image";

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss']
})
export class UserImageComponent implements OnInit{

  private _unsubscribeAll: Subject<any>;
  public currentUser: User;
 image:Image;
  constructor(
      private router: Router,private userService: UserService,private _authenticationService: AuthenticationService) {
    this._authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.userService.getimageById(this._authenticationService.currentUserValue.userName.toString()).
    subscribe(image => this.image = image)
      ;
    console.log("ttttt");
  }



}
