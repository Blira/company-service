import { GetCompaniesArgs } from "./dto/arg/getCompanies.args";
import { GetCompanyArgs } from "./dto/arg/getCompany.args";
import { CreateCompanyInput } from "./dto/input/createCompany.input";
import { UpdateCompanyInput } from "./dto/input/updateCompany.input";
export default class CompanyService {
    private prisma;
    constructor();
    getCompanies(getCompaniesArgs: GetCompaniesArgs): import(".prisma/client").PrismaPromise<import(".prisma/client").company[]>;
    getCompany(getCompanyArgs: GetCompanyArgs): import(".prisma/client").Prisma.Prisma__companyClient<import(".prisma/client").company>;
    createCompany(createCompanyData: CreateCompanyInput): Promise<import(".prisma/client").company>;
    updateCompany(updateCompanyInput: UpdateCompanyInput): Promise<import(".prisma/client").company>;
}
