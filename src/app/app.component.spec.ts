import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MusicPlayerService } from "./services/music-palyer-service";
import { HttpClientModule } from "@angular/common/http";
import { Music } from "./models/music";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [MusicPlayerService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async () => {
    const tmpMusic: Music = {
      id: 1,
      name: 'name',
      artist: 'artist',
      lyrics: 'lyrics',
      file: 'file',
      cover: 'cover',
      publish_date: 'publish_date'
    };

    const musics = [tmpMusic];

    spyOn((component as any).musicPlayerService, "getMusics").and.returnValue(Promise.resolve(musics));

    await component.ngOnInit();

    expect(component.musics).toBe(musics);
  });
});
