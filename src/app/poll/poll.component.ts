import { Component } from '@angular/core';
import { Poll as PollService } from '../poll';
import { Poll } from '../poll.models';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poll',
  imports: [CommonModule,FormsModule],
  templateUrl: './poll.html',
  styleUrls: ['./poll.css'],
})
export class PollComponent implements OnInit {

  polls: Poll[] = [];

  constructor(private pollService: PollService) {}

  ngOnInit() {
    this.loadPolls();
  }

  loadPolls() {
    this.pollService.getPolls().subscribe({
      next: (data) => {
        this.polls = data;
      },
      error: (err) => {
        console.error("Error loading polls:", err);
      }
    });
  }
}
