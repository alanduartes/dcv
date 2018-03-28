import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { SchoolComponent } from './school/school.component';
import { ExperienceComponent } from './experience/experience.component';
import { CoursesComponent } from './courses/courses.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { LanguageComponent } from './language/language.component'

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    ExperienceComponent,
    CoursesComponent,
    KnowledgeComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
