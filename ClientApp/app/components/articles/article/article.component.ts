import { Component, Input } from '@angular/core';
import { Article } from '../article.model';

@Component({
    selector: 'article',
    templateUrl: 'article.component.html',
    styleUrls: ['article.component.css', '../styles.css', '../vendor/semantic.min.css']
    //moduleId: module.id
})
export class ArticleComponent {
    private name = 'ArticleComponent';
    //保存一篇文章对象
    //将来子组件，从父组件art-list的ngFor遍历中，获得的一定是一个article输入对象
    @Input() article: Article; 
    //分别支持点赞和点踩的两个处理函数
    voteUp(): boolean { 
        this.article.voteUp();
        return false;
    }
    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }
}

