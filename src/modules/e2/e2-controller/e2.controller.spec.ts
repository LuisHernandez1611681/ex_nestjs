import { Test, TestingModule } from '@nestjs/testing';
import { E2Controller } from './e2.controller';

describe('E2Controller', () => {
  let controller: E2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [E2Controller],
    }).compile();

    controller = module.get<E2Controller>(E2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
