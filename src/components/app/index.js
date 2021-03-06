/**
 * @overview Main application container-component
 * @module   app
 * @requires @angular/core
 * @requires styles.css
 * @requires template.html
 */

import { Component } from '@angular/core';

import { PlaylistService } from '../../services';
import styles   from './styles.css';
import template from './template.html';

@Component({
  selector: 'app',
  styles: [styles],
  template
})
class AppComponent {
  static get parameters() {
    return [[PlaylistService]];
  }

  constructor(playlistService) {
    this.playlistService = playlistService;
    this.station         = null;

    playlistService.current.subscribe(current => {
      this.station = current;
    });
  }
}

export default AppComponent;
