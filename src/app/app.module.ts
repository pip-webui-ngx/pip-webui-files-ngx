import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipThemesModule, pipWebUI2ThemesList, mstThemes } from 'pip-webui-themes-ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { UploadFilesExampleModule } from './upload-files-example/upload-files-example.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    PipThemesModule.forRoot({
      themes: [...pipWebUI2ThemesList, mstThemes['Elegant']],
    }),
    AppRoutingModule,
    ExamplesListModule,
    UploadFilesExampleModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
