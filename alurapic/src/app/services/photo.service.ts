import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../photos/photo';

const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private httpClient: HttpClient) {}

  /**
   * @name getPhotosFromUserName
   * @description Este método retorna um Observable de um array de fotos que pertencem a um usuário específico. Ele recebe como parâmetro o nome do usuário, que é usado para compor a URL da API de fotos.
   * @param user Nome do usuário
   * @returns {Observable<Photo[]>} retorna um Observable de um array de fotos
   */
  public getPhotosFromUserName(user: string): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`${API}/${user}/photos`);
  }
}
