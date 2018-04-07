import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

// This code copy to app.module.ts
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
// This code copy to app.module.ts
import { UserListComponent } from './components/user-list/user-list.component';
// This code copy to app.module.ts
import { UserItemComponent } from './components/user-list/user-item/user-item.component';
// This code copy to app.module.ts
import { ArticlesComponent } from './components/articles/articles.component';
// This code copy to app.module.ts
import { ArticleComponent } from './components/articles/article/article.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        HelloWorldComponent,
        UserListComponent,
        UserItemComponent,
        ArticlesComponent,
        ArticleComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'articles', component: ArticlesComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
