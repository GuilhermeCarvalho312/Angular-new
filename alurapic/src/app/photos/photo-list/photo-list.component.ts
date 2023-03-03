import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  public title = 'AluraPic';
  public photos: Array<Photo> = [];
  public userName: string = 'flavio';

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService
      .getPhotosFromUserName(this.userName)
      .pipe(
        catchError((error: any) => {
          console.error(error);
          return empty();
        }),
        switchMap((response: Photo[]) => {
          this.photos = response;
          console.table(response);

          return this.photos;
        })
      )
      .subscribe();
  }
}
