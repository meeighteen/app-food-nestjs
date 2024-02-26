import { BusinessService } from '../services/business.service';
import { Business } from 'src/models/business/entities/business.entity';
import { CreateBusinessDto } from '../dto/validators/createBusiness.dto';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Response } from '../dto/types/owner.types';
import { BusinessDto } from '../dto/validators/business.dto';
// import { BusinessDto } from '../dto/validators/business.dto';

@Resolver(() => Business)
export class BusinessResolver {
  constructor(private businessService: BusinessService) {}

  @Query(() => [Business], { name: 'getAllBusiness' })
  async getAllBusiness(): Promise<Business[]> {
    return await this.businessService.findAll();
  }

  @Query(() => Business, { name: 'getBusinessByName' })
  async getBusinessByName(
    // @Args('businessId', { type: () => String }) id: string,
    @Args('businessName', { type: () => String }) name: string,
  ): Promise<Business | object> {
    return await this.businessService.findByName(name);
  }

  @Mutation(() => Response, { name: 'createBusiness' })
  async createBusiness(
    @Args('businessData') input: CreateBusinessDto,
  ): Promise<Response> {
    return await this.businessService.create(input);
  }

  @Mutation(() => Response, { name: 'updateBusiness' })
  async updateBusiness(
    @Args({ name: 'businessData', type: () => BusinessDto }) input: BusinessDto,
  ): Promise<Response> {
    return await this.businessService.update(input);
  }
}
