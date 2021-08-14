import { Music } from "../models/music";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class MusicPlayerService {
  private baseUrl = 'https://songs.code-star.ir';

  public constructor(public httpClient: HttpClient) {
  }

  public async getMusics(): Promise<Music[]> {
    return (await this.httpClient.get<any>(this.baseUrl + '/song/all').toPromise()).songs as Music[];
  }
}
