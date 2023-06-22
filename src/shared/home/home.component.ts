import {Component} from '@angular/core';

@Component({
  selector: 'zs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  absoluteRef(id: string): string {
    return `url(${window.location.href}#${id})`;
  }

  getPatternUrl(id: string): string {
    return `url(${window.location.href}#${id})`;
  }

}
