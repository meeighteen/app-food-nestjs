import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Owner } from '../../models/owner/entities/owner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { owners as ownersData } from '../../database/seeders/owner/data';
import { CreateOwnerDto } from '../dto/validators/createOwnerDto';
import { Response } from '../dto/types/owner.types';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: MongoRepository<Owner>,
  ) {}

  async findAll(): Promise<Owner[]> {
    try {
      return await this.ownerRepository.find();
    } catch (error) {
      throw new Error('Error al obtener Owners');
    }
  }

  async findById(id: string): Promise<Owner> {
    return await this.ownerRepository.findOneBy({
      _id: new ObjectId(id),
    });
  }

  async create(input: CreateOwnerDto): Promise<Response> {
    try {
      const owner = new Owner();
      owner.firstName = input.firstName;
      owner.lastName = input.lastName;
      owner.email = input.email;
      owner.password = input.password;
      await this.ownerRepository.save(owner);

      return { message: 'Owner was created succesfully' };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async seed(): Promise<Response> {
    const ownersCount = await this.ownerRepository.countDocuments();
    if (ownersCount < 2) {
      const ownerPromises = ownersData.map(async (owner) => {
        return this.ownerRepository.save(owner);
      });

      const promises = await Promise.all(ownerPromises);
      console.log(promises);
      return { message: 'Owners was created succesfully by seed.' };
    } else {
      return { message: 'There are Owners in database.' };
    }
  }
}
