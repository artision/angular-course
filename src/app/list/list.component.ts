import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies: object;
  filterText: string;

  constructor(private http: HttpService) { }

  /* private url: string = 'https://raw.githubusercontent.com/vega/vega/master/docs/data/movies.json'; */


  ngOnInit() {

    this.http.getMovies().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }

}
