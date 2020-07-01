import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profiledata = {} as User;
  private img_src;
  constructor(private userService: UsersService,
    private route: ActivatedRoute) { }
    
  idUser;
  ngOnInit() {
    // this.idUser = this.route.snapshot.params['id'];
    this.idUser = '5ef76d79fa11c42ed86912b9';
    this.getprofieinformation();
  }

  getprofieinformation() {
    this.userService.getOneUser(this.idUser)
      .subscribe(res => {
        this.img_src = "../../../assets/no-img.jpg";
        this.profiledata =  res;
      });

  }

}
