import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/users/model/user';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData: User;

  constructor(private profilesService: ProfileService) { 
    this.profileData={} as User;
  }

  ngOnInit(): void {
    this.getEspecificUser();
  }



  getOneUser(){
    this.profilesService.getById(1).subscribe((response: any)=>{
      this.profileData = response;
    });
  }

  getEspecificUser(){
    this.profilesService.getById(1).subscribe((response: any)=>{
      this.profileData = response;
    });
  }


}
