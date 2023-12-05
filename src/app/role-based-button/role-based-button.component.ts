import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { UserRoles } from '../app.component';

@Component({
  selector: 'role-based-button',
  templateUrl: './role-based-button.component.html'
})
export class RoleBasedButtonComponent implements OnInit {
  @Input() role: string = UserRoles.User;
  @Input() name: string = 'Action';
  @Input() disabledTooltipText: string = 'You don\'t have enough permissions for this action'
  @Input() enabledTooltipText: string = 'Button that displays a tooltip and changes its\' state based on user role';

  protected isDisabled: boolean = false;
  protected showDisabledTooltip: boolean = true;
  private allowedRoles: string[] = [UserRoles.Admin];

  ngOnInit(): void {
    this.checkDisabledState()
  }

  ngOnChanges(change: SimpleChanges) {
    this.checkDisabledState();
  }

  private checkDisabledState(): void {
    this.isDisabled = !this.allowedRoles.includes(this.role);
    this.showDisabledTooltip = !this.isDisabled;
  }
}
