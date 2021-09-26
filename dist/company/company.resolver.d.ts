import { Company } from "./company.model";
import CompanyService from "./company.service";
import { GetCompaniesArgs } from "./dto/arg/getCompanies.args";
import { GetCompanyArgs } from "./dto/arg/getCompany.args";
import { CreateCompanyInput } from "./dto/input/createCompany.input";
import { UpdateCompanyInput } from "./dto/input/updateCompany.input";
export declare class CompanyResolver {
    private readonly companyService;
    constructor(companyService: CompanyService);
    getCompany(getCompanyArgs: GetCompanyArgs): Promise<Company>;
    getCompanies(getCompaniesArgs: GetCompaniesArgs): Promise<Company[]>;
    createCompany(createCompanyData: CreateCompanyInput): Promise<Company>;
    updateCompany(updateCompanyData: UpdateCompanyInput): Promise<Company>;
}
