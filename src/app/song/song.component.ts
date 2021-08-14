import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Music } from "../models/music";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {
  @Input()
  public music: Music | undefined;

  @Output()
  public selected = new EventEmitter<Music>();

  public select(): void {
    this.selected.emit(this.music)
  }
}
