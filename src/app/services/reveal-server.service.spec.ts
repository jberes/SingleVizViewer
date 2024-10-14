import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RevealServerService } from './reveal-server.service';

describe('RevealServerService', () => {
  let service: RevealServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RevealServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
