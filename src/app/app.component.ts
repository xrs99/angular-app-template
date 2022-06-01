import { Component } from '@angular/core';
import axios, { AxiosRequestConfig, Method } from "axios";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';

  ngOnInt() {}

  getRecipies() {
    console.log('get recipies')
  }
}
