import { BadRequestException, Injectable } from '@nestjs/common';
import { Owner } from '../../models/owner/entities/owner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { owners as ownersData } from '../../database/seeders/owner/data';
import { sections as sectionsData } from '../../database/seeders/section/data';
import { CreateOwnerDto } from '../dto/validators/createOwnerDto';
import { Response } from '../dto/types/owner.types';
import { Section } from 'src/models/section/entities/section.entity';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: MongoRepository<Owner>,
    @InjectRepository(Section)
    private readonly sectionRepository: MongoRepository<Section>,
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
      // return { message: 'Owners was created succesfully by seed.' };
    }

    const sectionsCount = await this.sectionRepository.countDocuments();
    if (sectionsCount < 2) {
      const sectionsPromises = sectionsData.map(async (section) => {
        return this.sectionRepository.save(section);
      });

      const promises = await Promise.all(sectionsPromises);
      console.log(promises);
      // return { message: 'Owners was created succesfully by seed.' };
    }
    return { message: 'Seed correctly' };
  }
}
