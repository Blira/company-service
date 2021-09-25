import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateCompanyInput {
    @Field({nullable: true})
    @IsString()
    id: string;

    @Field()
    @IsString()
    @IsOptional()
    name: string;

    @Field()
    @IsString()
    @IsOptional()
    description?: string;
}