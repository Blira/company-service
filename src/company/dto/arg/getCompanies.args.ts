import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray } from "class-validator";

@ArgsType()
export class GetCompaniesArgs {
    @Field(() => [Number], { nullable: true })
    @IsArray()
    ids?: number[];
}