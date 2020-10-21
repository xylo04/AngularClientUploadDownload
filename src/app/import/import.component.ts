import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {
  @Output() fileNameImported = new EventEmitter<string>();
  @Output() fileTypeImported = new EventEmitter<string>();
  @Output() fileContentImported = new EventEmitter<ArrayBuffer>();

  constructor() {
  }

  import($event: any): void {
    const file = $event.target.files[0] as File;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.fileNameImported.emit(file.name);
      this.fileTypeImported.emit(file.type);
      // this.fileContentImported.emit(fileReader.result as string);
      this.fileContentImported.emit(fileReader.result as ArrayBuffer);
    };
    // fileReader.readAsText(file);
    fileReader.readAsArrayBuffer(file);
  }
}
