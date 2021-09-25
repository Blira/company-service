import { Injectable } from "@nestjs/common";
import { Company } from "./company.model";
import { GetCompaniesArgs } from "./dto/arg/getCompanies.args";
import { GetCompanyArgs } from "./dto/arg/getCompany.args";
import { CreateCompanyInput } from "./dto/input/createCompany.input";

@Injectable()
export default class CompanyService {
    private companies: Company[] = [];


    public createCompany(createCompanyData: CreateCompanyInput) {
        const id = this.companies.length + 1;
        const newCompany: Company = {
            id,
            active: true,
            plan: 0,
            name: createCompanyData.name,
            description: createCompanyData.description
        };
        this.companies.push(newCompany);
        return newCompany;
    }

    public getCompanies(getCompaniesArgs: GetCompaniesArgs) {
        if(!getCompaniesArgs.ids){
            return this.companies;
        }
        return this.companies.filter(currentCompany => getCompaniesArgs.ids.includes(currentCompany.id));
    }

    public getCompany(getCompanyArgs: GetCompanyArgs) {
        return this.companies.find(currentCompany => currentCompany.id === getCompanyArgs.id);
    }


    // public createCompany(company: Company) {
    //     this.companies.push(company);
    // }

    // public getCompanies(ids: number[]) {
    //     return this.companies.filter(currentCompany => ids.includes(currentCompany.id));
    // }

    // public getCompany(id: number) {
    //     return this.companies.find(currentCompany => currentCompany.id === id);
    // }
}