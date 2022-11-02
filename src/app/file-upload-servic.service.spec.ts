import { TestBed } from '@angular/core/testing';

import { FileUploadServicService } from './file-upload-servic.service';

describe('FileUploadServicService', () => {
  let service: FileUploadServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploadServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
