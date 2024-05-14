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
  appliances = this.smartphonesService.appliances;
  computers = this.smartphonesService.computers;
  displays = this.smartphonesService.displays;
  smartThings = this.smartphonesService.smartThings;
  support = this.smartphonesService.support;

  ngOnInit(): void {

  }

}
