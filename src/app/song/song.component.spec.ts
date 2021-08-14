import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongComponent } from './song.component';

describe('SongComponent', () => {
  let component: SongComponent;
  let fixture: ComponentFixture<SongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SongComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const tmpMusic = {
      id: 1,
      name: 'name',
      artist: 'artist',
      lyrics: 'lyrics',
      file: 'file',
      cover: 'cover',
      publish_date: 'publish_date'
    };

    component.music = tmpMusic;

    component.selected.subscribe((music) => {
      expect(music).toBe(tmpMusic);
    });

    component.select();
  });
});
