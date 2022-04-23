import { Test, TestingModule } from '@nestjs/testing';
import { EntityManager } from 'typeorm';
import { TradeController } from './trade.controller';
import { TradeService } from './trade.service';

describe('TradeController', () => {
  let controller: TradeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TradeController],
      providers: [
        TradeService,
        { provide: EntityManager, useValue: { find: jest.fn() } },
      ],
    }).compile();

    controller = module.get<TradeController>(TradeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
