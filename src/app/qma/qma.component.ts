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
  iframeUrl2: SafeResourceUrl | undefined;
  
  baseurl = "https://na1.dev.nice-incontact.com/player/#/cxone-player/segments/";
  urlWithSegmentId = '';
  call = {
    supervisorName: '',
    comments: '',
    futureReminder: '',
    callRating: ''
  };

  constructor(private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.urlWithSegmentId = this.baseurl + params['segmentId'];
      this.iframeUrl1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlWithSegmentId);
      this.iframeUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlWithSegmentId);
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.call);
    // Add your form submission logic here
  }

}
