import { PrismaClient } from "@prisma/client";
import { v4 } from "uuid";
import { GetCompaniesArgs } from "./dto/arg/getCompanies.args";
import { GetCompanyArgs } from "./dto/arg/getCompany.args";
import { CreateCompanyInput } from "./dto/input/createCompany.input";
import { DeleteCompanyInput } from "./dto/input/deleteCompany.input";
import { UpdateCompanyInput } from "./dto/input/updateCompany.input";

export default class CompanyRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    public getCompanies(getCompaniesArgs: GetCompaniesArgs) {
        if (!getCompaniesArgs.ids) {
            return this.prisma.company.findMany();
        }
        return this.prisma.company.findMany({
            where: { id: { in: getCompaniesArgs.ids } }
        });
    }


    public getCompany(getCompanyArgs: GetCompanyArgs) {
        return this.prisma.company.findFirst({
            where: { id: getCompanyArgs.id }
        })
    }

    public async createCompany(createCompanyData: CreateCompanyInput) {
        const newCompany = await this.prisma.company.create({
            data: {
                id: v4(),
                name: createCompanyData.name,
                description: createCompanyData.description
            }
        });
        return newCompany;
    }


    public async updateCompany(updateCompanyInput: UpdateCompanyInput) {
        const companyToUpdate = await this.prisma.company.count({
            where: { id: updateCompanyInput.id }
        });

        if (companyToUpdate < 1) {
            throw new Error('Company not found');
        };

        const updatedCompany = await this.prisma.company.update({
            where: { id: updateCompanyInput.id },
            data: {
                name: updateCompanyInput.name,
                description: updateCompanyInput.description
            }
        });
        return updatedCompany;
    }

    public async deleteCompany(deleteCompanyInput: DeleteCompanyInput) {
        const companyToDelete = await this.prisma.company.count({
            where: { id: deleteCompanyInput.id }
        });

        if (companyToDelete < 1) {
            throw new Error('Company not found');
        };

        const deletedCompany = await this.prisma.company.delete({
            where: { id: deleteCompanyInput.id },
        });
        return deletedCompany;
    }

}