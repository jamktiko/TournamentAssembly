import { Component } from '@angular/core';
import { Competitor } from '../competitor';

@Component({
  selector: 'app-tourview',
  templateUrl: './tourview.component.html',
  styleUrls: ['./tourview.component.css'],
})
export class TourviewComponent {
  constructor() {}

  public selected!: number;
  public compMenuOpen = false;

  public newName!: string;
  public newCompName!: string;

  public competitors: Competitor[] = [];

  public selectCompetitor(id: number) {
    this.selected = id;

    const competitor = this.competitors.find(
      (competitor) => competitor.id === id
    );

    if (competitor) this.newName = competitor.name;
  }

  public changeCompetitor(id: number) {
    const competitor = this.competitors.find(
      (competitor) => competitor.id === id
    );

    if (competitor) competitor.name = this.newName;

    this.selected = -1;
  }

  public changePoints(amount: number, id: number) {
    const competitor = this.competitors.find(
      (competitor) => competitor.id === id
    );

    if (competitor) competitor.points += amount;
  }

  public addCompetitor() {
    if (this.newCompName) {
      this.competitors.push({
        id: this.idGen(),
        name: this.newCompName,
        points: 0,
      });
    }

    this.newCompName = '';

    console.log(this.competitors);
  }

  public openCompAddMenu() {
    this.compMenuOpen = !this.compMenuOpen;
  }

  private idGen() {
    return this.competitors.length !== 0
      ? Math.max(...this.competitors.map((competitor) => competitor.id)) + 1
      : 0;
  }
}
