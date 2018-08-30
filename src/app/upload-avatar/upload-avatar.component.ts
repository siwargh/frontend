import { Component, NgZone, Inject,
  EventEmitter, Input, OnInit } from '@angular/core';

  import { NgUploaderOptions, UploadedFile, UploadRejected } from 'ngx-uploader';

@Component({
  selector: 'app-upload-avatar',
  templateUrl: './upload-avatar.component.html',
  styleUrls: ['./upload-avatar.component.scss']
})
export class UploadAvatarComponent implements OnInit {

  @Input() private options: NgUploaderOptions;
  response: any;
  sizeLimit = 5000000;
  previewData: any;
  errorMessage: string;
  inputUploadEvents: EventEmitter<string>;
  currentUser: any = {};

  constructor(@Inject(NgZone) private zone: NgZone) {
    this.options = new NgUploaderOptions({
      url: 'http://localhost:3000/avatar/upload',
      filterExtensions: true,
      allowedExtensions: ['jpg', 'png', 'jpeg'],
      maxSize: 2097152,
      data: { userId: ((JSON.parse(localStorage.getItem('currentUser'))._id))},
      autoUpload: false,
      fieldName: 'avatar',
      fieldReset: true,
      maxUploads: 2,
      method: 'POST',
      previewUrl: true,
      withCredentials: false
    });
    this.inputUploadEvents = new EventEmitter<string>();
  }

  startUpload() {
    this.inputUploadEvents.emit('startUpload');
  }

  beforeUpload(uploadingFile: UploadedFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      this.errorMessage = 'File is too large!';
    }
  }

  handleUpload(data: any) {
    setTimeout(() => {
      this.zone.run(() => {
        this.response = data;
        if (data && data.response) {
          this.response = JSON.parse(data.response);
          this.errorMessage = this.response.err_desc;
        }
      });
    });
  }

  handlePreviewData(data: any) {
    this.previewData = data;
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}
