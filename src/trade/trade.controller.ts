import { Controller, Get } from '@nestjs/common';
import { TradeService } from './trade.service';

@Controller('api/v1/trade/')
export class TradeController {
  constructor(private tradeService: TradeService) {}

  @Get('all')
  async tradeHistory() {
    return this.tradeService.findAll();
  }

  @Get('allDetails')
  async tradeDetails() {
    return this.tradeService.findAllTradeDetails();
  }
}
