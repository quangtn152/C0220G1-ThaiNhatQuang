import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {CommonModule} from "@angular/common";
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { TodoComponent } from './todo/todo.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import {ImageGalleryModule} from "./image-gallery/image-gallery.module";
import {GalleryConfig} from "./image-gallery/image-card/token";
import {ImgSliderModule} from "./img-slider/img-slider.module";
import { CountdownComponent } from './countdown/countdown.component';
import { LoginComponent } from './login/login.component';
import {UserModule} from "./user/user.module";

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    TodoComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    DictionaryComponent,
    CountdownComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    ImageGalleryModule,
    ImgSliderModule,
    UserModule
  ],
  providers: [
    {provide: GalleryConfig, useValue:2}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
