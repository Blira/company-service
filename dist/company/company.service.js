"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const client_1 = require("@prisma/client");
let CompanyService = class CompanyService {
    constructor() {
        this.companies = [];
        this.prisma = new client_1.PrismaClient();
    }
    getCompanies(getCompaniesArgs) {
        if (!getCompaniesArgs.ids) {
            return this.prisma.company.findMany();
        }
        return this.prisma.company.findMany({
            where: { id: { in: getCompaniesArgs.ids } }
        });
    }
    getCompany(getCompanyArgs) {
        return this.prisma.company.findFirst({
            where: { id: getCompanyArgs.id }
        });
    }
    async createCompany(createCompanyData) {
        const newCompany = await this.prisma.company.create({
            data: {
                id: (0, uuid_1.v4)(),
                name: createCompanyData.name,
                description: createCompanyData.description
            }
        });
        return newCompany;
    }
    async updateCompany(updateCompanyInput) {
        const companyToUpdate = await this.prisma.company.count({
            where: { id: updateCompanyInput.id }
        });
        if (companyToUpdate < 1) {
            throw new Error('Company not found');
        }
        ;
        const updatedCompany = await this.prisma.company.update({
            where: { id: updateCompanyInput.id },
            data: {
                name: updateCompanyInput.name,
                description: updateCompanyInput.description
            }
        });
        return updatedCompany;
    }
};
CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CompanyService);
exports.default = CompanyService;
//# sourceMappingURL=company.service.js.map