import { Body, Controller, Get, Post } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { Owner } from './owner.entity';
import { OwnerInput } from './owner.input';

@Controller('owner')
export class OwnerController {
  constructor(private ownerService: OwnerService) {}

  @Get()
  async getAllOwners(): Promise<Owner[]> {
    return this.ownerService.findAll();
  }

  @Post('create')
  async createOwner(
    @Body()
    input: OwnerInput,
  ): Promise<Owner> {
    return this.ownerService.create(input);
  }

  @Post('seed')
  async getSeed(): Promise<void> {
    this.ownerService.seed();
  }
}
