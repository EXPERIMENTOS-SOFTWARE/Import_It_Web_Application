import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../model/user';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData: User;

  constructor(private profilesService: ProfileService, private authService: AuthService) {
    this.profileData = {} as User;
  }

  ngOnInit(): void {
    //this.getEspecificUser();
    this.getEspecificUser(this.authService.currentUserID());
  }

  /*
    getAllStudents(){
      this.profilesService.getAll().subscribe((response: any)=>{
        this.dataSource.data = response;
      });
    }
  */

  getOneUser() {
    this.profilesService.getById(1).subscribe((response: any) => {
      //this.profileData.first_name = response.first_name;
      this.profileData = response;
    });
  }
  /*
    getOneUserByDNI(dni: number) {
      this.profilesService.getByDni(dni).subscribe((response: any) => {
        //this.profileData.first_name = response.first_name;
        this.profileData = response;
      });
    }
    */
  getEspecificUser(id: number) {
    this.profilesService.getById(id).subscribe((response: any) => {
      /*this.profileData.first_name = response.first_name;*/
      this.profileData = response;
    });
  }


}
