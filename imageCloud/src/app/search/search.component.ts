import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'app/search/search-result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: SearchResult[];

  constructor() { }

  updateResults(results: SearchResult[]) {
    this.results = results;
  }

  ngOnInit() {
  }

}
