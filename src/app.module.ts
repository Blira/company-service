import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import CompanyModule from './company/company.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
        autoSchemaFile: true
    }),
    CompanyModule
  ],
})
export class AppModule {}
