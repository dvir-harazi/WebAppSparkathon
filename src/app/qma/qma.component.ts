import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qma',
  templateUrl: './qma.component.html',
  styleUrl: './qma.component.css'
})
export class QmaComponent implements OnInit {
  iframeUrl1: SafeResourceUrl | undefined;

  baseurl = "https://na1.dev.nice-incontact.com/qm/admin/#/manageForms";

  constructor(private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.iframeUrl1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseurl);
    });
  }
  currentRating = 0;

  onRatingUpdated(rating: number): void {
    this.currentRating = rating;
  }

  onSubmit() {
   
  }

}
