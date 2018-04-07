import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
    selector: 'articles',
    templateUrl: 'articles.component.html',
    styleUrls: ['articles.component.css', 'styles.css', 'vendor/semantic.min.css'],
    //moduleId: module.id
})
export class ArticlesComponent {
    private name = 'ArticlesComponent';
    articles: Article[];
    constructor() {
        this.articles = [
            new Article("东东", "http://dongdong.applinzi.com"),
            new Article("京京", "http://jingjing.applinzi.com"),
            new Article("瓜子", "http://guazi.applinzi.com"),
            new Article("二豆", "http://erdou.applinzi.com")
        ]
    }
    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new Article(title.value, link.value));
        title.value = '';
        link.value = '';
        return false;
    }
}