import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

/**
 * Import and provides GraphQL module for Queries and Mutations
 *
 * @module
 */
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // installSubscriptionHandlers: true,
      autoSchemaFile: true,
      formatError: (error) => {
        console.error('error', error);
        return error;
      },
      csrfPrevention: false,
      playground: false,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
})
export class ApiGraphQLModule {}
