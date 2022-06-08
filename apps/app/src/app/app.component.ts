import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@set-online/api-interfaces';

@Component({
  selector: 'set-online-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/hello');
  constructor(private http: HttpClient) {}
}
