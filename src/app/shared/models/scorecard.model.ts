import { Facility } from './facility.model';

export class Customer {
  name: string;
  id: string;
  facilities: Array<Facility>;
  networth: object;
  bcsb: object;
  gender: string;
  ageRange: string;
  nationalityType: string;
  repaymentSource: string;
  proposedLimit: string;
  dpdOneYear: string;
  relationYears: string;
  businessYears: string;
  supportDocumentsFile: string;
  new: boolean;
  internalNetworthLimitRatio: string;
  totalNetworthLimitRatio: string;
  wtdAvgFacilityScore: number;
  limitCheck: boolean;

  constructor(customer: Customer) {
    this.name = customer.name;
    this.id = customer.id;
    this.facilities = customer.facilities;
    this.networth = customer.networth;
    this.bcsb = customer.bcsb;
    this.gender = customer.gender;
    this.ageRange = customer.ageRange;
    this.nationalityType = customer.nationalityType;
    this.repaymentSource = customer.repaymentSource;
    this.proposedLimit = customer.proposedLimit;
    this.dpdOneYear = customer.dpdOneYear;
    this.relationYears = customer.relationYears;
    this.businessYears = customer.businessYears;
    this.supportDocumentsFile = customer.supportDocumentsFile;
    this.new = customer.new;
    this.internalNetworthLimitRatio = customer.internalNetworthLimitRatio;
    this.totalNetworthLimitRatio = customer.totalNetworthLimitRatio;
    this.wtdAvgFacilityScore = customer.wtdAvgFacilityScore;
    this.limitCheck = customer.limitCheck;
  }
}

export class Scorecard {
  id: string;
  customer: Customer;
  orr: number;
  status: string;
  maker: object;
  approver: object;
  orrGrade: object;
  expiryDt: string;
  createdAt: string;
  updatedAt: string;

  constructor(sc: Scorecard) {
    this.id = sc.id;
    this.customer = sc.customer;
    this.orr = sc.orr;
    this.status = sc.status;
    this.maker = sc.maker;
    this.approver = sc.approver;
    this.orrGrade = sc.orrGrade;
    this.expiryDt = sc.expiryDt;
    this.createdAt = sc.createdAt;
    this.updatedAt = sc.updatedAt;
  }

  public orrColor(): string {
    if (this.orr <= 100) {
      return 'danger';
    }
    if (this.orr > 100 && this.orr <= 255) {
      return 'warning';
    }
    if (this.orr > 255) {
      return 'success';
    }
  }

  public frrColor(): string {
    if (+this.customer.wtdAvgFacilityScore >= 175) {
      return 'success';
    }
    if (
      +this.customer.wtdAvgFacilityScore < 175 &&
      +this.customer.wtdAvgFacilityScore >= 75
    ) {
      return 'warning';
    }
    if (+this.customer.wtdAvgFacilityScore < 75) {
      return 'danger';
    }
  }
}
