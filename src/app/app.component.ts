import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export enum UserRoles {
  Admin = 'Admin',
  User = 'User'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'role-based-mat-button';
  public disabledTooltipText = `Users in ${UserRoles.User} role can't perform this action`;

  public roles: string[] = [];

  public role = new FormControl();

  ngOnInit(): void {
    this.roles = [UserRoles.Admin, UserRoles.User];
    this.role.patchValue(this.roles[1]);
  }

}
