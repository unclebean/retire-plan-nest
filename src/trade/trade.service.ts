import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { SignalEntity } from './signal.entity';
import { TradeEntity } from './trade.entity';

@Injectable()
export class TradeService {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async findAll(): Promise<TradeEntity[]> {
    return this.manager.find(TradeEntity);
  }

  async findAllTradeDetails(): Promise<SignalEntity[]> {
    return this.manager.find(SignalEntity);
  }

  async findTradeDetailsByTradeId(id: string): Promise<SignalEntity[]> {
    return this.manager.find(SignalEntity, { where: [{ trade_id: id }] });
  }
}
