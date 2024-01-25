import { OwnerService } from '../services/owner.service';
import { Owner } from '../../models/owner/entities/owner.entity';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateOwnerDto } from '../dto/validators/createOwnerDto';
import { Response } from '../dto/types/owner.types';

@Resolver(() => Owner)
export class OwnerResolver {
  constructor(private ownerService: OwnerService) {}

  /**
   *
   * @Queries Queries for Owner resolver
   */

  @Query(() => [Owner], { name: 'getAllOwners' })
  async getAllOwners(): Promise<Owner[]> {
    return await this.ownerService.findAll();
  }

  @Query(() => Owner, { name: 'getOwnerById' })
  async getOwnerById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Owner> {
    return await this.ownerService.findById(id);
  }

  /**
   * @Mutations Mutations for Owner resolver
   */
  @Mutation(() => Response, { name: 'createOwner' })
  async createOwner(
    @Args('createOwnerInput') createOwnerInput: CreateOwnerDto,
  ): Promise<Response> {
    return await this.ownerService.create(createOwnerInput);
  }

  @Mutation(() => Response, { name: 'getSeed' })
  async getSeed(): Promise<Response> {
    return this.ownerService.seed();
  }
}
