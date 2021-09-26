import { Module } from "@nestjs/common";
import CompanyRepository from "./company.repository";
import { CompanyResolver } from "./company.resolver";
import CompanyService from "./company.service";

@Module({
    providers: [CompanyResolver, CompanyService, CompanyRepository],
})
export default class CompanyModule { }