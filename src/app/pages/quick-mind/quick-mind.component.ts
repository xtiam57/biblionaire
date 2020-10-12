import { Component, OnInit } from '@angular/core';
import { QuickMindService } from '../../services/quick-mind.service';

@Component({
  selector: 'app-quick-mind',
  templateUrl: './quick-mind.component.html',
  styleUrls: ['./quick-mind.component.scss'],
})
export class QuickMindComponent implements OnInit {
  constructor(public quickMindService: QuickMindService) {}

  ngOnInit(): void {
    this.quickMindService.start();
  }
}
