import { Body, Controller, Get, Post } from '@nestjs/common';
import { BusinessService } from '../services/business.service';
import { Business } from 'src/models/business/entities/business.entity';
import { CreateBusinessDto } from '../dto/validators/CreateBusinessDto';

@Controller('business')
export class BusinessController {
  constructor(private businessService: BusinessService) {}

  @Get()
  async getAllBusiness(): Promise<Business[]> {
    return this.businessService.findAll();
  }

  @Post('create')
  async createBusiness(@Body() input: CreateBusinessDto): Promise<Business> {
    return this.businessService.create(input);
  }
}
