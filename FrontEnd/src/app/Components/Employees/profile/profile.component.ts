import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private authenticateService: AuthenticationService) {}
  UserProfile: any;
  ngOnInit(): void {
    this.UserProfile = this.authenticateService.getUserData();
    console.log(this.UserProfile);
  }
}
