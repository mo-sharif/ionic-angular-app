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
      title: "First look",
      description: "Built on the <b>Ionic Framework</b>, this template is a great front end solution.",
      image: "assets/img/science.png",
      url: "#",
    },
    {
      title: "Awesome components",
      description: "Features high quality and reusable angular components",
      image: "assets/img/coins.png",
      url: "#",
    },
    {
      title: "High performance",
      description: "Leverages latest asynchronous technologies to increase performance.",
      image: "assets/img/manWalking.png",
      url: "#",
    }
  ];
  
}
