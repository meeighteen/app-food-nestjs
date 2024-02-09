import { BusinessService } from '../services/business.service';
import { Business } from 'src/models/business/entities/business.entity';
// import { CreateBusinessDto } from '../dto/validators/CreateBusinessDto';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateBusinessDto } from '../dto/validators/CreateBusinessDto';

@Resolver(() => Business)
export class BusinessResolver {
  constructor(private businessService: BusinessService) {}

  @Query(() => [Business], { name: 'getAllBusiness' })
  async getAllBusiness(): Promise<Business[]> {
    return await this.businessService.findAll();
  }

  @Query(() => Business, { name: 'getBusinessById' })
  async getBusinessById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Business> {
    return await this.businessService.findById(id);
  }

  @Mutation(() => Business, { name: 'createBusiness' })
  async createBusiness(
    @Args('input') input: CreateBusinessDto,
  ): Promise<Business> {
    return await this.businessService.create(input);
  }
}
