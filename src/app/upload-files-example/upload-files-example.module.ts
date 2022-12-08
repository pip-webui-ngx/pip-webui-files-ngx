import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PipFileUploadModule } from 'pip-webui-files-ngx';

import { UploadFilesExampleComponent } from './upload-files-example.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, PipFileUploadModule],
  declarations: [UploadFilesExampleComponent],
})
export class UploadFilesExampleModule {}
