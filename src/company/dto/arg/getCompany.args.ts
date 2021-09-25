import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber } from "class-validator";

@ArgsType()
export class GetCompanyArgs {
    @Field()
    @IsNumber()
    @IsNotEmpty()
    id: number;
}