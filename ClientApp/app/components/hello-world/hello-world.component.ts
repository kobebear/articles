import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hello-world', //选择器
    templateUrl: 'hello-world.component.html', //HTML模板文件地址。如果代码行数超过一屏，才有必要分离到独立的HTML文件中
    //也可以直接将模板写在这里: template:`html片段` //如果代码行数少于一屏，就直接写在.component.ts文件内
    styleUrls: [ 'hello-world.component.css'], //只会应用于该组件本身。数组类型: 可加载多个css
    //moduleId: module.id
})
export class HelloWorldComponent implements OnInit {
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }
    /*private*/ //name = 'HelloWorldComponent';
    /*private*/ name: string;
    constructor() {
        this.name = 'Hello JINGJING'; //强类型: 换成101报错!
    }
}

