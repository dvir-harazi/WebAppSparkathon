import { Component, OnInit } from '@angular/core';
import { LeaderboardEntry } from './leaderboard.model';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  entries: LeaderboardEntry[] = [];

  constructor() { }

  ngOnInit(): void {
    // Fetch leaderboard data or use static data
    this.entries = [
      { name: 'Dvir Harazi', score: 1200 },
      { name: 'Adir Akhavan', score: 1050 },
      { name: 'Pini Kaminer', score: 1000 },
      { name: 'Shay Kintzlinger', score: 900 },
      { name: 'Ofir Dror', score: 800 }
    ];
    // Optionally, fetch data from a service
    // this.loadLeaderboardData();
  }

  // Optionally, implement data fetching logic
  // loadLeaderboardData() {
  //   this.leaderboardService.getLeaderboardEntries().subscribe(data => {
  //     this.entries = data;
  //   });
  // }
}
