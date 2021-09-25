import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateCompanyInput {
    @Field()
    @IsNotEmpty()
    @IsString()
    name: string;

    @Field()
    @IsString()
    description?: string;
}