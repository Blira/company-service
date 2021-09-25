import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray } from "class-validator";

@ArgsType()
export class GetCompaniesArgs {
    @Field(() => [String], { nullable: true })
    @IsArray()
    ids?: string[];
}