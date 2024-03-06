import { SectionService } from '../services/section.service';
import { Section } from '../../models/section/entities/section.entity';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { OwnerDto } from '../dto/validators/owner.dto';
import { Response } from '../dto/types/owner.types';
import { SectionDto } from '../dto/validators/section.dto';

@Resolver(() => Section)
export class SectionResolver {
  constructor(private sectionService: SectionService) {}

  /**
   *
   * @Queries Queries for Owner resolver
   */

  @Query(() => [Section], { name: 'findSectionsByOwnerId' })
  async findSectionsByOwnerId(
    @Args({ name: 'createOwnerInput', type: () => String }) id: string,
  ): Promise<Section[]> {
    return await this.sectionService.findAllSectionsByOwnerId(id);
  }

  // @Mutation(() => Response, { name: 'createSection' })
  // async createSection(
  //   @Args('sectionData') sectionData: SectionDto,
  // ): Promise<Response> {
  //   return await this.sectionService.createSection(sectionData);
  // }
}
