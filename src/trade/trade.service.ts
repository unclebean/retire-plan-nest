import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { SignalEntity } from './signal.entity';
import { TradeEntity } from './trade.entity';

@Injectable()
export class TradeService {
  constructor(@InjectEntityManager() private manager: EntityManager) {}
  async findAll() {
    return this.manager.find(TradeEntity);
  }
  async findAllTradeDetails() {
    return this.manager.find(SignalEntity);
  }
}
