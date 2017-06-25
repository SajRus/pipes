import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })
      ),
      // transition('normal => highlighted', animate(500)),
      transition('highlighted <=> normal', animate(800))]
    ),
    trigger('advacedState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('scaled', style({
        'background-color': 'green',
        transform: 'translateX(100px) scale(0.5)'
      })),
      transition('highlighted <=> normal', animate(800)),
      transition('scaled <=> *', animate(500))
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'transformX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }), animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ])
    ])
  ]
})

export class AnimationComponent implements OnInit {

  constructor() { }
  list = ['Mele', 'Pere', 'Banane'];
  state = 'normal';
  advancedState = 'normal';

  ngOnInit() {
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
    this.advancedState = this.advancedState === 'normal' ? 'highlighted' : 'normal';
  }
  onAnimateAdvanced() {
    this.advancedState = 'scaled';
  }
}
