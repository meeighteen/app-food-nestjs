import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from 'src/models/section/entities/section.entity';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Response } from '../dto/types/owner.types';
import { SectionDto } from '../dto/validators/section.dto';
import { Business } from 'src/models/business/entities/business.entity';
import { Owner } from 'src/models/owner/entities/owner.entity';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private readonly sectionRepository: MongoRepository<Section>,
    @InjectRepository(Business)
    private readonly businessRepository: MongoRepository<Business>,
    @InjectRepository(Owner)
    private readonly ownerRepository: MongoRepository<Owner>,
  ) {}

  async findAllSectionsByOwnerId(ownerId: string): Promise<Section[]> {
    try {
      let Businesses: Business[];
      const FoundOwner = await this.ownerRepository.findOne({
        where: {
          _id: new ObjectId(ownerId),
        },
      });
      console.log(FoundOwner);

      if (FoundOwner) {
        Businesses = await this.businessRepository.find({
          where: {
            ownerId: FoundOwner._id,
          },
        });
        console.log(Businesses);
      }

      // return await this.sectionRepository.find({ where: { businessId: id } });
      return [];
    } catch (error) {
      console.log(error);
      throw new Error('Error at find all sections by Onwer Id');
    }
  }

  async createSection(sectionData: SectionDto): Promise<Response> {
    try {
      console.log('sectionData => ', sectionData);
      const { businessId, ...sectionDetails } = sectionData;
      const FoundBusiness = await this.businessRepository.findOne({
        where: { _id: new ObjectId(businessId) },
      });

      if (FoundBusiness) {
        const section = this.sectionRepository.create({
          businessId,
          ...sectionDetails,
        });
        await this.sectionRepository.save(section);

        return { message: 'Section created succesfully.' };
      } else {
        return { message: 'Business does not exist.' };
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error creating Section.');
    }
  }
}
