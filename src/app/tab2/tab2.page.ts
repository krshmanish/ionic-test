import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  cardDetails = [
    {
      header: 'Slide 1',
      title: 'Title 1',
      imgUrl: 'https://picsum.photos/id/1025/4951/3301',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      header: 'Slide 2',
      title: 'Title 2',
      imgUrl: 'https://picsum.photos/id/1001/5616/3744',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
      header: 'Slide 3',
      title: 'Title 3',
      imgUrl: 'https://picsum.photos/id/1003/1181/1772',
      content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.'
    },
    {
      header: 'Slide 4',
      title: 'Title 4',
      imgUrl: 'https://picsum.photos/id/1011/5472/3648',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
    }
  ];

  options = [
    {
      icon: 'medal-outline',
      details: 'medal-outline',
      id: 121
    },
    {
      icon: 'airplane-outline',
      details: 'airplane-outline',
      id: 122
    },
    {
      icon: 'aperture-outline',
      details: 'aperture-outline',
      id: 123
    },
    {
      icon: 'barbell-outline',
      details: 'barbell-outline',
      id: 124
    },
    {
      icon: 'bicycle-outline',
      details: 'bicycle-outline',
      id: 125
    },
    {
      icon: 'bug-outline',
      details: 'bug-outline',
      id: 126
    },
    {
      icon: 'megaphone-outline',
      details: 'megaphone-outline',
      id: 127
    },
    {
      icon: 'desktop-outline',
      details: 'desktop-outline',
      id: 128
    },
    {
      icon: 'color-palette-outline',
      details: 'color-palette',
      id: 129
    },
    {
      icon: 'film-outline',
      details: 'film-outline',
      id: 130
    },
    {
      icon: 'gift-outline',
      details: 'gift-outline',
      id: 131
    },
    {
      icon: 'magnet-outline',
      details: 'magnet-outline',
      id: 132
    }
  ]
  constructor() {}
}
