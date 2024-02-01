import { SectionService } from '../services/section.service';
import { Section } from '../../models/section/entities/section.entity';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateOwnerDto } from '../dto/validators/createOwnerDto';
import { Response } from '../dto/types/owner.types';

@Resolver(() => Section)
export class SectionResolver {
  constructor(private readonly sectionService: SectionService) {}

  /**
   *
   * @Queries Queries for Owner resolver
   */

  //   @Query(() => [Owner], { name: 'getAllOwners' })
  //   async getAllOwners(): Promise<Owner[]> {
  //     return await this.ownerService.findAll();
  //   }

  @Query(() => [Section], { name: 'findSectionsByOwnerId' })
  async findSectionsByOwnerId(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Section[]> {
    return await this.sectionService.findAllSectionsByOwnerId(id);
  }

  //   /**
  //    * @Mutations Mutations for Owner resolver
  //    */
  //   @Mutation(() => Response, { name: 'createOwner' })
  //   async createOwner(
  //     @Args('createOwnerInput') createOwnerInput: CreateOwnerDto,
  //   ): Promise<Response> {
  //     return await this.ownerService.create(createOwnerInput);
  //   }

  //   @Mutation(() => Response, { name: 'getSeed' })
  //   async getSeed(): Promise<Response> {
  //     return this.ownerService.seed();
  //   }
}
