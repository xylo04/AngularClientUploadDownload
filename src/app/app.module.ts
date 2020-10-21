import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {ExportComponent} from './export/export.component';
import {FormsModule} from '@angular/forms';
import {ImportComponent} from './import/import.component';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ExportComponent,
    ImportComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
