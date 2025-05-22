import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'impact-recreation-vibes';
  newsItems: string[] = [
    'New Vibe partnership announced.',
    'Community event scheduled for next week.',
    'Quarterly results show positive growth.'
  ];
  newNews = '';

  addNews() {
    const item = this.newNews.trim();
    if (item) {
      this.newsItems.push(item);
      this.newNews = '';
    }
  }

  deleteNews(index: number) {
    this.newsItems.splice(index, 1);
  }
}
