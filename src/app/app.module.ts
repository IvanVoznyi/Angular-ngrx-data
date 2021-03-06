import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule, EntityDataService } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PostsDataService } from './services/posts-data.service';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://jsonplaceholder.typicode.com/',
  getDelay: 3000
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  // providers: [
  //   {
  //     provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig
  //   }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(entityDataService: EntityDataService, postsDataService: PostsDataService) {
    entityDataService.registerService('Post', postsDataService);
  }
}
