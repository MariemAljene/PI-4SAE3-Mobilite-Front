import { TestBed } from '@angular/core/testing';

import { UploadS3ServiceService } from './upload-s3-service.service';

describe('UploadS3ServiceService', () => {
  let service: UploadS3ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadS3ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
