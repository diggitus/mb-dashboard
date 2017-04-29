import { Component, OnInit, EventEmitter, ElementRef, Output } from '@angular/core';
import { SearchService } from 'app/search/search.service';
import { SearchResult } from 'app/search/search-result';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(public searchService: SearchService, private el: ElementRef) { }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => this.loading.next(true))
      .map((query: string) => this.searchService.search(query))
      .subscribe((results: SearchResult[]) => {
        this.loading.next(false);
        this.results.next(results);
      });
  }

  triggerSearch(e: Event) {
    this.results.next(this.searchService.search('test'));
  }
}
