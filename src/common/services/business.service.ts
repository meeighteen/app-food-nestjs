import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Business } from 'src/models/business/entities/business.entity';
import { MongoRepository } from 'typeorm';
import { CreateBusinessDto } from '../dto/validators/CreateBusinessDto';
import { ObjectId } from 'mongodb';
import { Owner } from 'src/models/owner/entities/owner.entity';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business)
    private readonly businessRepository: MongoRepository<Business>,
    @InjectRepository(Owner)
    private readonly ownerRepository: MongoRepository<Owner>,
  ) {}

  async findAll(): Promise<Business[]> {
    return await this.businessRepository.find();
  }

  async findById(id: string): Promise<Business> {
    try {
      return await this.businessRepository.findOneBy({
        _id: new ObjectId(id),
      });
    } catch (error) {
      throw new Error('Error al obtener Business by ID');
    }
  }

  async create(input: CreateBusinessDto): Promise<Business> {
    const business = new Business();
    business.name = input.name;
    business.description = input.description;

    const owner = await this.ownerRepository.findOneBy({
      _id: new ObjectId(input.ownerId),
    });

    business.ownerId = owner._id;

    return this.businessRepository.save(business);
  }
}
