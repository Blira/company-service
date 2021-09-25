import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Company {
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