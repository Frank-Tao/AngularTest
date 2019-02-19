import { TestBed } from '@angular/core/testing';
import { CatService } from './cat.service';
import { HttpClientModule } from '@angular/common/http';

describe('CatService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [
    HttpClientModule      
  ]})); 

  it('should be created', () => {
    const service: CatService = TestBed.get(CatService);
    expect(service).toBeTruthy();
  });
});
