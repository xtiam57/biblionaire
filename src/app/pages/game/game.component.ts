import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

import {
  faUser,
  faBible,
  faPhone,
  faHandHoldingUsd,
  faCheck,
  faEye,
  faArrowRight,
  faHome,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(public gameService: GameService) {}

  faUser = faUser;
  faBible = faBible;
  faPhone = faPhone;
  faHandHoldingUsd = faHandHoldingUsd;
  faCheck = faCheck;
  faEye = faEye;
  faArrowRight = faArrowRight;
  faHome = faHome;
  faStarHalfAlt = faStarHalfAlt;

  ngOnInit(): void {
    this.gameService.start();
  }
}
