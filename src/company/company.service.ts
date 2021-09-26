import { Inject, Injectable } from "@nestjs/common";
import { GetCompaniesArgs } from "./dto/arg/getCompanies.args";
import { GetCompanyArgs } from "./dto/arg/getCompany.args";
import { CreateCompanyInput } from "./dto/input/createCompany.input";
import { UpdateCompanyInput } from "./dto/input/updateCompany.input";

import { v4 } from 'uuid'
import CompanyRepository from "./company.repository";

@Injectable()
export default class CompanyService {

    constructor(private readonly companyRepository: CompanyRepository) {}

    public getCompanies(getCompaniesArgs: GetCompaniesArgs) {
        return this.companyRepository.getCompanies(getCompaniesArgs);
    };

    public getCompany(getCompanyArgs: GetCompanyArgs) {
        return this.companyRepository.getCompany(getCompanyArgs);
    }

    public async createCompany(createCompanyData: CreateCompanyInput) {
        return this.companyRepository.createCompany(createCompanyData);
    }


    public async updateCompany(updateCompanyInput: UpdateCompanyInput) {
        return this.companyRepository.updateCompany(updateCompanyInput);
    }


}