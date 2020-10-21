import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fileName: string;
  fileType: string;
  fileContent: ArrayBuffer;
  decoder = new TextDecoder('utf8');
}
