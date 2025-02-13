import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CardDto {
  @IsString()
  cvc: string;

  @IsNumber()
  exp_month: number;

  @IsNumber()
  exp_year: number;

  @IsString()
  number: string;

  @IsString()
  @IsOptional()
  token?: string;
}
