import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  newsItems: { title: string; description: string }[] = [
    {
      title: 'New Vibe partnership announced.',
      description: 'A new partnership is forming to bring more vibes to the community.'
    },
    {
      title: 'Community event scheduled for next week.',
      description: 'Join us next week for a celebration of all things vibey.'
    },
    {
      title: 'Quarterly results show positive growth.',
      description: 'Latest numbers indicate the vibes are stronger than ever.'
    }
  ];

  newNewsTitle = '';
  newNewsDescription = '';

  addNews() {
    const title = this.newNewsTitle.trim();
    const description = this.newNewsDescription.trim();
    if (title && description) {
      this.newsItems.push({ title, description });
      this.newNewsTitle = '';
      this.newNewsDescription = '';
    }
  }

  deleteNews(index: number) {
    this.newsItems.splice(index, 1);
  }
}
