import { Injectable } from '@angular/core';
import { SearchResult } from "app/search/search-result";

@Injectable()
export class SearchService {

  constructor() { }

  search(query: string):SearchResult[] {
    let searchResults:SearchResult[] = [];
    
    searchResults[0] = new SearchResult({
      id: 1,
      title: 'Result 1 ' + query,
      description: 'desc'
    });

    searchResults[1] = new SearchResult({
      id: 2,
      title: 'Result 2 ' + query,
      description: 'desc'
    });
    return searchResults;
  }

}
