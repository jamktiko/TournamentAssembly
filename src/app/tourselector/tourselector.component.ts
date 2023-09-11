import { Component } from '@angular/core';
import { Match } from '../match';
import { Competitor } from '../competitor';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-tourselector',
  templateUrl: './tourselector.component.html',
  styleUrls: ['./tourselector.component.css'],
})
export class TourselectorComponent implements OnInit {
  constructor() {}

  public brackets: any;
  public rounds: any = [];

  ngOnInit(): void {
    const comps = [
      1, 2, 3, 4, 5, 7, 10, 6, 152, 301, 24, 2345, 546, 345, 97, 74,
    ];

    this.brackets = this.formatSE(comps);
    this.rounds.push(this.brackets);
    const rounds = this.countRounds(comps.length);

    for (let i = 0; i < rounds - 1; i++) this.rounds.push([]);
  }

  public formatSE(competitors: number[]) {
    const brackets = competitors.map((competitor) => {
      const matchup: number[] = [];
      matchup.push(
        competitor,
        competitors[competitors.indexOf(competitor) + 1]
      );
      return { matchup };
    });

    return brackets.filter((match) => brackets.indexOf(match) % 2 !== 1);
  }

  public roundWin(winner: number) {
    this.rounds.push();
  }

  private countRounds(amount: number) {
    let counter = 0;

    do {
      amount /= 2;
      counter++;
    } while (amount / 2 !== 1);

    counter++;
    console.log(counter);
    return counter;
  }
}
