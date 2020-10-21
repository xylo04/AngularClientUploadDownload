import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {
  @Output() importedFile = new EventEmitter<string>();

  constructor() {
  }

  import($event: any): void {
    const file = $event.path[0][0].files[0] as File;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.importedFile.emit(fileReader.result as string);
    };
    fileReader.readAsText(file);
  }
}
