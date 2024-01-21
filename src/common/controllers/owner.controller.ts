import { Body, Controller, Get, Post } from '@nestjs/common';
import { OwnerService } from '../services/owner.service';
import { Owner } from '../../models/owner/entities/owner.entity';
// import { IOwner } from '../../models/owner/interfaces/owner.interface';
import { CreateOwnerDto } from '../dto/validators/createOwnerDto';

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
    input: CreateOwnerDto,
  ): Promise<Owner> {
    return this.ownerService.create(input);
  }

  @Post('seed')
  async getSeed(): Promise<void> {
    this.ownerService.seed();
  }
}
