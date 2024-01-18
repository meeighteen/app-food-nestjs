import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Owner } from './schemas/owner.schema';
import * as mongoose from 'mongoose';
import ownersData from '../../data/owners';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel(Owner.name)
    private ownerModel: mongoose.Model<Owner>,
  ) {}

  async seed(): Promise<void> {
    const ownersCount = await this.ownerModel.countDocuments();
    if (ownersCount < 2) {
      const usersPromises = ownersData.map(async (owner) => {
        return new this.ownerModel(owner).save();
      });

      const promises = await Promise.all(usersPromises);
      console.log(promises);
    }
  }

  async findAll(): Promise<Owner[]> {
    const owners = await this.ownerModel.find();
    return owners;
  }

  async create(owner: Owner): Promise<Owner> {
    const res = await this.ownerModel.create(owner);
    return res;
  }
}
