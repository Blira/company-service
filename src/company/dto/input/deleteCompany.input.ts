import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class DeleteCompanyInput {
    @Field({nullable: true})
    @IsString()
    id: string;
}