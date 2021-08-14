import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { MusicPlayerService } from "./services/music-palyer-service";
import { SongComponent } from './song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MusicPlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
