import { Component, Input } from '@angular/core';

@Component({
    selector: 'user-item',
    templateUrl: 'user-item.component.html',
    styleUrls: [ 'user-item.component.css'],
    //moduleId: module.id
})
export class UserItemComponent {
    @Input() name: string;
}

