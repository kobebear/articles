import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hello-world', //ѡ����
    templateUrl: 'hello-world.component.html', //HTMLģ���ļ���ַ�����������������һ�������б�Ҫ���뵽������HTML�ļ���
    //Ҳ����ֱ�ӽ�ģ��д������: template:`htmlƬ��` //���������������һ������ֱ��д��.component.ts�ļ���
    styleUrls: [ 'hello-world.component.css'], //ֻ��Ӧ���ڸ����������������: �ɼ��ض��css
    //moduleId: module.id
})
export class HelloWorldComponent implements OnInit {
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }
    /*private*/ //name = 'HelloWorldComponent';
    /*private*/ name: string;
    constructor() {
        this.name = 'Hello JINGJING'; //ǿ����: ����101����!
    }
}

