import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/service/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from 'app/shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app works!';
  userId: string;
  userIdObj: string;
  userIdInterface: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().map(
      (user: User) => user.userId
    ).subscribe((userId) => this.userId = userId);

    this.userService.getUserObject().subscribe((user: User) => {
      this.userIdObj = user.userId;
    });
  }


}
