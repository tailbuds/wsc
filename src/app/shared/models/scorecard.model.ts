import { Facility } from './facility.model';

export class Customer {
  name: string;
  wtdAvgFacilityScore: number;
  facilities: Array<Facility>;
  id: string;

  constructor(
    name: string,
    id: string,
    wtdAvgFacilityScore: number = 0,
    facilities: Array<Facility> = []
  ) {
    this.name = name;
    this.id = id;
    this.wtdAvgFacilityScore = wtdAvgFacilityScore;
    this.facilities = facilities;
  }
}

export class Scorecard {
  id: string;
  customer: Customer;
  orr: number;
  status: string;
  // id: string, customer: Customer, orr: number, status: string
  constructor(sc: Scorecard) {
    this.id = sc.id;
    this.customer = sc.customer;
    this.orr = sc.orr;
    this.status = sc.status;
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
