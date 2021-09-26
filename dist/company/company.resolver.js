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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const company_model_1 = require("./company.model");
const company_service_1 = require("./company.service");
const getCompanies_args_1 = require("./dto/arg/getCompanies.args");
const getCompany_args_1 = require("./dto/arg/getCompany.args");
const createCompany_input_1 = require("./dto/input/createCompany.input");
const updateCompany_input_1 = require("./dto/input/updateCompany.input");
let CompanyResolver = class CompanyResolver {
    constructor(companyService) {
        this.companyService = companyService;
    }
    getCompany(getCompanyArgs) {
        return this.companyService.getCompany(getCompanyArgs);
    }
    getCompanies(getCompaniesArgs) {
        return this.companyService.getCompanies(getCompaniesArgs);
    }
    createCompany(createCompanyData) {
        return this.companyService.createCompany(createCompanyData);
    }
    updateCompany(updateCompanyData) {
        return this.companyService.updateCompany(updateCompanyData);
    }
};
__decorate([
    (0, graphql_1.Query)(() => company_model_1.Company, { name: 'company', nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getCompany_args_1.GetCompanyArgs]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "getCompany", null);
__decorate([
    (0, graphql_1.Query)(() => [company_model_1.Company], { name: 'companies', nullable: 'itemsAndList' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getCompanies_args_1.GetCompaniesArgs]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "getCompanies", null);
__decorate([
    (0, graphql_1.Mutation)(() => company_model_1.Company),
    __param(0, (0, graphql_1.Args)('createCompanyData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCompany_input_1.CreateCompanyInput]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "createCompany", null);
__decorate([
    (0, graphql_1.Mutation)(() => company_model_1.Company),
    __param(0, (0, graphql_1.Args)('updateCompanyData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateCompany_input_1.UpdateCompanyInput]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "updateCompany", null);
CompanyResolver = __decorate([
    (0, graphql_1.Resolver)(() => company_model_1.Company),
    __metadata("design:paramtypes", [company_service_1.default])
], CompanyResolver);
exports.CompanyResolver = CompanyResolver;
//# sourceMappingURL=company.resolver.js.map