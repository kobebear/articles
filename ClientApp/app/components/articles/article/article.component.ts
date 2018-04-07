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
    //����һƪ���¶���
    //������������Ӹ����art-list��ngFor�����У���õ�һ����һ��article�������
    @Input() article: Article; 
    //�ֱ�֧�ֵ��޺͵�ȵ�����������
    voteUp(): boolean { 
        this.article.voteUp();
        return false;
    }
    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }
}

