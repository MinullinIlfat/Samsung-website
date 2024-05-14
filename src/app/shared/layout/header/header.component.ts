import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../../../services/header/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor( private smartphonesService: HeaderService) { }
  Al = this.smartphonesService.Al;
  smartphonesName = this.smartphonesService.smartphones;
  smartphonesImg = this.smartphonesService.smartphonesImages;
  TvAndAudio = this.smartphonesService.TvAndAudio;

  ngOnInit(): void {

  }

}
