import { Injectable } from '@nestjs/common';
import { Owner } from './owner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import ownersData from '../data/owners';
import { OwnerInput } from './owner.input';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: MongoRepository<Owner>,
  ) {}

  async findAll(): Promise<Owner[]> {
    const owners = await this.ownerRepository.find();
    console.log('owners ', owners);
    return owners;
  }

  async create(input: OwnerInput): Promise<Owner> {
    const owner = new Owner();
    owner._id = uuidv4();
    owner.firstName = input.firstName;
    owner.lastName = input.lastName;
    owner.email = input.email;
    owner.password = input.password;

    return this.ownerRepository.save(owner);
  }

  async seed(): Promise<void> {
    const ownersCount = await this.ownerRepository.countDocuments();
    if (ownersCount < 2) {
      const ownerPromises = ownersData.map(async (owner) => {
        return this.ownerRepository.save(owner);
      });

      const promises = await Promise.all(ownerPromises);
      console.log(promises);
    }
  }
}
