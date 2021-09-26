import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { Company } from "./company.model";
import CompanyService from "./company.service";
import { GetCompaniesArgs } from "./dto/arg/getCompanies.args";
import { GetCompanyArgs } from "./dto/arg/getCompany.args";
import { CreateCompanyInput } from "./dto/input/createCompany.input";
import { UpdateCompanyInput } from "./dto/input/updateCompany.input";

@Resolver(() => Company)
export class CompanyResolver {

    constructor(private readonly companyService: CompanyService) { }

    @Query(() => Company, { name: 'company', nullable: true })
    getCompany(@Args() getCompanyArgs: GetCompanyArgs): Promise<Company> {
        return this.companyService.getCompany(getCompanyArgs);
    }

    @Query(() => [Company], { name: 'companies', nullable: 'items' })
    getCompanies(@Args() getCompaniesArgs: GetCompaniesArgs): Promise<Company[]> {
        return this.companyService.getCompanies(getCompaniesArgs);
    }

    @Mutation(() => Company)
    createCompany(@Args('createCompanyData') createCompanyData: CreateCompanyInput): Promise<Company> {
        return this.companyService.createCompany(createCompanyData);
    }

    @Mutation(() => Company)
    updateCompany(@Args('updateCompanyData') updateCompanyData: UpdateCompanyInput): Promise<Company> {
        return this.companyService.updateCompany(updateCompanyData);
    }
}