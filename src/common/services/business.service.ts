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
      return await this.businessRepository.findOne({
        where: { _id: new ObjectId(id) },
        // relations: {
        //   owner: true,
        // },
      });
    } catch (error) {
      throw new Error('Error al obtener Business by ID');
    }
  }

  async create(input: CreateBusinessDto): Promise<Business> {
    const business = new Business();
    business.name = input.name;
    business.description = input.description;

    const owner = await this.ownerRepository.findOne({
      where: { _id: new ObjectId(input.ownerId) },
      relations: {
        businesses: true,
      },
      loadRelationIds: {
        relations: [],
      },
    });
    console.log('owner', owner);
    // await this.ownerRepository.updateOne(
    //   {
    //     _id: new ObjectId(input.ownerId),
    //   },
    //   {
    //     $push: {
    //       businesses: business,
    //     },
    //   },
    // );
    return business;
    // return this.businessRepository.save(business);
  }
}
