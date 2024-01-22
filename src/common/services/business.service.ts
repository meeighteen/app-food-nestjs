import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Business } from 'src/models/business/entities/business.entity';
import { MongoRepository } from 'typeorm';
import { CreateBusinessDto } from '../dto/validators/CreateBusinessDto';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business)
    private readonly businessRepository: MongoRepository<Business>,
  ) {}

  async findAll(): Promise<Business[]> {
    return await this.businessRepository.find();
  }

  async create(input: CreateBusinessDto): Promise<Business> {
    const business = new Business();
    business.name = input.name;
    business.description = input.description;
    business.ownerId = input.ownerId;

    return this.businessRepository.save(business);
  }
}
