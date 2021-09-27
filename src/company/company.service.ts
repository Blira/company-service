import { Injectable, OnModuleInit } from "@nestjs/common";
import { GetCompaniesArgs } from "./dto/arg/getCompanies.args";
import { GetCompanyArgs } from "./dto/arg/getCompany.args";
import { CreateCompanyInput } from "./dto/input/createCompany.input";
import { UpdateCompanyInput } from "./dto/input/updateCompany.input";
import CompanyRepository from "./company.repository";
import { Client, ClientKafka, Transport } from "@nestjs/microservices";
import { DeleteCompanyInput } from "./dto/input/deleteCompany.input";

@Injectable()
export default class CompanyService implements OnModuleInit {

    constructor(private readonly companyRepository: CompanyRepository) { }

    @Client({
        transport: Transport.KAFKA,
        options: {
            client: {
                clientId: 'company-service',
                brokers: [process.env.KAFKA_BROKER],
            },
            producer: {
                allowAutoTopicCreation: true
            }
        }
    })
    client: ClientKafka;

    async onModuleInit() {
        this.client.subscribeToResponseOf('company_created');
        this.client.subscribeToResponseOf('company_updated');
        this.client.subscribeToResponseOf('company_deleted');
        await this.client.connect();
    }

    public getCompanies(getCompaniesArgs: GetCompaniesArgs) {
        return this.companyRepository.getCompanies(getCompaniesArgs);
    };

    public getCompany(getCompanyArgs: GetCompanyArgs) {
        return this.companyRepository.getCompany(getCompanyArgs);
    }
    
    public async createCompany(createCompanyData: CreateCompanyInput) {
        const createdCompany = await this.companyRepository.createCompany(createCompanyData);
        this.client.send('company_created', createdCompany).subscribe();
        return createdCompany;
    }

    public async updateCompany(updateCompanyInput: UpdateCompanyInput) {
        const updatedCompany = await this.companyRepository.updateCompany(updateCompanyInput);
        this.client.send('company_updated', updatedCompany).subscribe();
        return updatedCompany;
    }

    public async deleteCompany(deleteCompanyInput: DeleteCompanyInput) {
        const deletedCompany = await this.companyRepository.deleteCompany(deleteCompanyInput);
        this.client.send('company_deleted', deletedCompany).subscribe();
        return deletedCompany;
    }
}