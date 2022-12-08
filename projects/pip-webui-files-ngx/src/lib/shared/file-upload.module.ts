import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PipFileUploadService } from './file-upload.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [],
  providers: [PipFileUploadService],
})
export class PipFileUploadModule {}
