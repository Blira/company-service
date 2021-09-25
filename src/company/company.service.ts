import { Injectable } from "@nestjs/common";
import { Company } from "./company.model";
import { GetCompaniesArgs } from "./dto/arg/getCompanies.args";
import { GetCompanyArgs } from "./dto/arg/getCompany.args";
import { CreateCompanyInput } from "./dto/input/createCompany.input";
import { v4 } from 'uuid'
import { UpdateCompanyInput } from "./dto/input/updateCompany.input";

@Injectable()
export default class CompanyService {
    private companies: Company[] = [];

    public getCompanies(getCompaniesArgs: GetCompaniesArgs) {
        if (!getCompaniesArgs.ids) {
            return this.companies;
        }
        return this.companies.filter(currentCompany => getCompaniesArgs.ids.includes(currentCompany.id));
    }

    public getCompany(getCompanyArgs: GetCompanyArgs) {
        return this.companies.find(currentCompany => currentCompany.id === getCompanyArgs.id);
    }

    public createCompany(createCompanyData: CreateCompanyInput) {
        const newCompany: Company = {
            id: v4(),
            active: true,
            plan: 0,
            name: createCompanyData.name,
            description: createCompanyData.description
        };
        this.companies.push(newCompany);
        return newCompany;
    }


    public updateCompany(updateCompanyInput: UpdateCompanyInput) {

        const indexToUpdate = this.companies.findIndex(company => company.id === updateCompanyInput.id);
        console.log('indexToUpdate', indexToUpdate);
        console.log('companies', this.companies);

        if (indexToUpdate < 0) {
            throw new Error('Company not found');
        };
        const updatedCompany = {
            ...this.companies[indexToUpdate],
            ...updateCompanyInput
        }

        this.companies[indexToUpdate] = updatedCompany;
        return updatedCompany;
    }


}