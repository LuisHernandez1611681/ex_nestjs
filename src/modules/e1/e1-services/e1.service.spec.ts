import { Test, TestingModule } from '@nestjs/testing';
import { E1Service } from './e1.service';

describe('E1Service', () => {
  let service: E1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [E1Service],
    }).compile();

    service = module.get<E1Service>(E1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
