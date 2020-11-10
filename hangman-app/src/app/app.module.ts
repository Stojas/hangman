import { ModalService } from 'src/services/modal.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InitialPageComponent } from 'src/components/initial-page/initial-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'src/components/modal/modal.module';


@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    HttpClientModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
