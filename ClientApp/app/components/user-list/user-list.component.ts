import { Component } from '@angular/core';

@Component({
    selector: 'user-list',
    templateUrl: 'user-list.component.html',
    styleUrls: [ 'user-list.component.css'],
    //moduleId: module.id
})
export class UserListComponent {
    private name = "UserListComponent";
    private names: string[];
    constructor() {
        this.names = ["东东","京京","二豆","瓜子"];
    }
}

