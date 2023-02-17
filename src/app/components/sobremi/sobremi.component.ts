import { Component } from '@angular/core';
import { faHeadphones, faFutbol,faPlane,faHiking,faBusinessTime,faDownload } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent {
  faHeadphones=faHeadphones;
  faFutbol=faFutbol;
  faPlane=faPlane;
  faHiking=faHiking;
  faBussinesTime=faBusinessTime;
  faDownload=faDownload;

}
