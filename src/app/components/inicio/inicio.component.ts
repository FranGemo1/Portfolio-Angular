import { Component } from '@angular/core';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  faFacebook=faFacebook;
  faLinkedin=faLinkedin;
  faInstagram=faInstagram;
}
