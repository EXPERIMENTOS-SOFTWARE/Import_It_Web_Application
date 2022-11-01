import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/users/model/user';
import { UsersService } from 'src/app/users/services/users.service';
import { Userprofile } from '../../model/userprofile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData: Userprofile;
  user: User[] = [];
  dniData: string = '';
  isLogedData: string = "";
  userTypeData: string = "";

  constructor(private profilesService: ProfileService, private authService: AuthService, private userService: UsersService) {
    this.profileData = {} as Userprofile;
    this.recuperar_localstorage();
    this.getAllUser();
    this.isLogedData = 'true';
  }

  ngOnInit(): void {
    //this.getEspecificUser();
    this.getEspecificUser(this.authService.currentUserID());
  }
  getAllUser() {
    this.userService.getAll().subscribe((response: any) => {
      this.user = response;
      this.user = this.user.filter(x => x.dni === this.dniData)
    })
  }
  recuperar_localstorage() {
    this.dniData = localStorage.getItem('dni') ?? '';
    this.isLogedData = localStorage.getItem("isLoged") ?? '';
    this.userTypeData = localStorage.getItem("userType") ?? '';
    console.log(this.dniData);
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
