import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent {
  @Input() fileName = '';
  @Input() fileType = '';
  @Input() fileContent = '';
  @ViewChild('download') download: ElementRef<HTMLAnchorElement>;

  constructor() {
  }

  export(): void {
    const blob = new Blob([this.fileContent], {type: this.fileType});
    const objectURL = (window.URL || window.webkitURL).createObjectURL(blob);
    this.download.nativeElement.setAttribute('href', objectURL);
    this.download.nativeElement.setAttribute('download', this.fileName);
    this.download.nativeElement.click();
  }
}
