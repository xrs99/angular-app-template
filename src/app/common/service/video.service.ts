import { Injectable } from '@angular/core';
import { Video } from '../interface/video';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor() {}

  getVideos() {
    const videos: Video[] = [
      {
        title: 'test video',
        submittedBy: 'Riley',
        upCount: 3,
      },
      {
        title:
          'BOXING, HIGH SCHOOL, AND OUR EX’S ft. Peter Park - OfflineTV Podcast #20',
        submittedBy: 'xrsbishop',
        upCount: 7,
      },
    ];
    return videos;
  }
}
