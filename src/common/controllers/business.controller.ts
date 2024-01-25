import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { BusinessService } from '../services/business.service';
import { Business } from 'src/models/business/entities/business.entity';
import { CreateBusinessDto } from '../dto/validators/CreateBusinessDto';

import { Request, Response } from 'express';
@Controller('business')
export class BusinessController {
  constructor(private businessService: BusinessService) {}

  @Get()
  async getAllBusiness(@Res() res: Response): Promise<Business[]> {
    try {
      const business = await this.businessService.findAll();
      res.status(200).json({ business });
      return;
    } catch (error) {
      res.status(500).json({ data: 'Error at getAllBusiness' });
    }
  }

  @Get('getById/:id')
  async getBusinessById(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<Business> {
    try {
      const business = await this.businessService.findById(id);
      res.status(200).json({ business });
      return;
    } catch (error) {
      res.status(500).json({ data: 'Error at getBusinessById' });
    }
  }

  @Post('create')
  async createBusiness(@Body() input: CreateBusinessDto): Promise<Business> {
    return await this.businessService.create(input);
  }
}
