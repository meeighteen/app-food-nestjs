import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Business } from 'src/models/business/entities/business.entity';
import { MongoRepository } from 'typeorm';
// import { BusinessDto } from '../dto/validators/business.dto';
import { ObjectId } from 'mongodb';
import { Owner } from 'src/models/owner/entities/owner.entity';
import { CreateBusinessDto } from '../dto/validators/createBusiness.dto';
import { Response } from '../dto/types/owner.types';
import { BusinessDto } from '../dto/validators/business.dto';

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

  async findByName(name: string): Promise<Business> {
    try {
      return await this.businessRepository.findOne({
        where: {
          name,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error('Error finding owner by Id.');
    }
  }

  async create(businessData: CreateBusinessDto): Promise<Response> {
    try {
      const { ownerId, ...businessInfo } = businessData;
      const Owner = await this.ownerRepository.findOne({
        where: {
          _id: new ObjectId(ownerId),
        },
      });

      const detailsBusiness = { colorBg: '#fff', colorFt: '#fff', btns: [] };

      if (Owner) {
        const business = this.businessRepository.create({
          ...businessInfo,
          action: detailsBusiness,
          information: detailsBusiness,
          ownerId: Owner._id,
        });
        await this.businessRepository.save(business);

        return { message: 'Business created succesfully' };
      } else {
        throw new Error('Owner does not exist');
      }
    } catch (error) {
      throw new Error('Error creating a Business');
    }
  }

  async update(businessData: BusinessDto): Promise<Response> {
    try {
      console.log(businessData);
      const { businessId, ...businessInfo } = businessData;

      const Business = await this.businessRepository.findOneAndUpdate(
        {
          _id: new ObjectId(businessId),
        },
        {
          $set: { ...businessInfo },
        },
        { returnDocument: 'after' },
      );

      if (!Business) {
        return { message: 'Business does not exist' };
      }

      return { message: 'Business updated succesfully' };
    } catch (error) {
      console.log(error);
      throw new Error('Error updating a Business');
    }
  }
}
