import {Injectable} from '@angular/core';
import {Content} from '../model/api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

//  private baseUrl = 'https://small-wonders.herokuapp.com/api/content';

  private baseUrl = 'http://localhost:8080/api/content';

  constructor(private http: HttpClient) {
  }

  getContentsList(): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.baseUrl}`);
  }

  deleteContent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});

  }

  createContent(content: Content): Observable<Content> {
    return this.http.post<Content>(`${this.baseUrl}`, content);
  }

  getContent(id: number): Observable<Content> {
    return this.http.get<Content>(`${this.baseUrl}/${id}`);
  }

  updateContent(id: number, content: Content): Observable<Content> {
    return this.http.put<Content>(`${this.baseUrl}/${id}`, content);
  }

}
