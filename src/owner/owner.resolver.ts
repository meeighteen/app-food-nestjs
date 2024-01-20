import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OwnerService } from './owner.service';
import { Owner } from './owner.entity';
import { OwnerInput } from './owner.input';

@Resolver('User')
export class UserResolver {
  constructor(private readonly ownerService: OwnerService) {}

  @Query(() => String)
  async hello() {
    return await 'world';
  }

  @Query(() => [Owner])
  async owners() {
    return this.ownerService.findAll();
  }

  @Mutation(() => Owner)
  async createOwner(@Args('input') input: OwnerInput) {
    return await this.ownerService.create(input);
  }
}
