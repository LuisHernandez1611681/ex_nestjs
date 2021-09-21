import { Test, TestingModule } from '@nestjs/testing';
import { E1Controller } from './e1.controller';

describe('E1Controller', () => {
  let controller: E1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [E1Controller],
    }).compile();

    controller = module.get<E1Controller>(E1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
