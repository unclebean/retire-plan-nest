import { Test, TestingModule } from '@nestjs/testing';
import { EntityManager } from 'typeorm';
import { TradeService } from './trade.service';

describe('TradeService', () => {
  let service: TradeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TradeService,
        { provide: EntityManager, useValue: { find: jest.fn() } },
      ],
    }).compile();

    service = module.get<TradeService>(TradeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
