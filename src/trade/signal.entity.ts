import {
  JoinColumn,
  Column,
  ManyToOne,
  Entity,
  PrimaryColumn,
} from 'typeorm';
import { TradeEntity } from './trade.entity';

@Entity({ name: 'signal' })
export class SignalEntity {
  @PrimaryColumn()
  symbol: string;

  @Column()
  indicator: string;

  @Column()
  indicator_value: number;

  @Column()
  trade_signal: string;

  @PrimaryColumn()
  trade_status: string;

  @PrimaryColumn()
  @ManyToOne((type) => TradeEntity, trade => trade.id)
  @JoinColumn({ name: 'trade_id' })
  trade_id: string;
}
