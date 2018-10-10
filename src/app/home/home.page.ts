import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  slideOpts = {
    effect: 'flip',
    mode: 'ios',
  };
  slides = [
    {
      title: "Welcome to the future!",
      description: "This <b>Ionic Framework</b> is cool. We will be working on making it even cooler by integrating it to work with a WordPress Website.",
      image: "assets/img/img1.png",
      url: "#",
    },
    {
      title: "Building the layout",
      description: "<b>Ionic Framework</b> provides us with high quality components, we just need to touch them up and maybe implement components of our own.",
      image: "assets/img/img2.png",
      url: "#",
    },
    {
      title: "WordPress API",
      description: "We can easily expose WordPress resource, but we need to create our own services to request these recourses.",
      image: "assets/img/img3.png",
      url: "#",
    }
  ];
  
}
