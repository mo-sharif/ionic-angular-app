import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {
  blog$: Array<any>;

  constructor() { }
  /*
  blog$: Observable<any[]>;
  getPosts(): Observable<any[]>{
      return this.http.get<any[]>('https://www.mosh-media.com/wp-json/wp/v2/posts?_embed', {
          params: {
            per_page: '4'
          }
        });
  }*/

async ngOnInit() {
  let data = await fetch('https://www.mosh-media.com/wp-json/wp/v2/posts?per_page=4&_embed');
  let json = await data.json();
  return this.blog$ = json; 
  
}

}
