import {
  Entity,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { SignalEntity } from './signal.entity';

@Entity({ name: 'trade' })
export class TradeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  symbol: string;

  @Column()
  strategy: string;

  @Column()
  trend: string;

  @Column({ nullable: true })
  entry_signal: string;

  @Column({ type: 'datetime', nullable: true })
  entry_date: Date;

  @Column({ nullable: true })
  opend_position: number;

  @Column({ nullable: true })
  exit_signal: string;

  @Column({ type: 'datetime', nullable: true })
  exit_date: Date;

  @Column({ nullable: true })
  closed_position: number;

  @Column({ nullable: true })
  result: number;

  @Column({ nullable: true })
  status: string;

  @Column({ type: 'datetime', nullable: true })
  create_date: Date;
}
