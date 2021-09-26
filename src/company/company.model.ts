import { Field, ObjectType } from "@nestjs/graphql";
import { CompanyInterface } from "./company.interface";

@ObjectType()
export class Company implements CompanyInterface {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field()
    active: boolean;

    @Field()
    plan: number;
}