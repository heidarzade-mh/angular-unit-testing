import { Component, OnInit } from '@angular/core';
import { MusicPlayerService } from "./services/music-palyer-service";
import { Music } from "./models/music";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public selectedMusic: Music | undefined;
  public musics: Music[] = [];

  public constructor(private musicPlayerService: MusicPlayerService) {
  }

  public async ngOnInit(): Promise<void> {
    this.musics = await this.musicPlayerService.getMusics();
    console.log(this.musics);
  }

  public changeSelected(music: Music): void {
    this.selectedMusic = music;
  }
}
