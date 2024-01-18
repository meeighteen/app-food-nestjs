import { Body, Controller, Get, Post } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { Owner } from './schemas/owner.schema';

@Controller('owner')
export class OwnerController {
  constructor(private ownerService: OwnerService) {}

  @Get()
  async getAllOwners(): Promise<Owner[]> {
    return this.ownerService.findAll();
  }

  @Post()
  async createOwner(
    @Body()
    owner: Owner,
  ): Promise<Owner> {
    return this.ownerService.create(owner);
  }

  @Post('seed')
  async getSeed(): Promise<void> {
    this.ownerService.seed();
  }
}
