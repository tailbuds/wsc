export class CollateralCoverage {
  cashMargin: string;
  bankGuaranteeOne: string;
  bankGuaranteeTwo: string;
  shares: string;
  freeholdFirstDegree: string;
  leaseholdFirstDegree: string;
  freeholdSecondDegree: string;

  constructor(
    cashMargin: string = '0',
    bankGuaranteeOne: string = '0',
    bankGuaranteeTwo: string = '0',
    shares: string = '0',
    freeholdFirstDegree: string = '0',
    leaseholdFirstDegree: string = '0',
    freeholdSecondDegree: string = '0'
  ) {
    this.cashMargin = cashMargin;
    this.bankGuaranteeOne = bankGuaranteeOne;
    this.bankGuaranteeTwo = bankGuaranteeTwo;
    this.shares = shares;
    this.freeholdFirstDegree = freeholdFirstDegree;
    this.leaseholdFirstDegree = leaseholdFirstDegree;
    this.freeholdSecondDegree = freeholdSecondDegree;
  }
}

export class Facility {
  id: string;
  product: string;
  limit: string;
  collateralCoveragePercent: CollateralCoverage;
  collateralCoverageRatio: string;
  score: number;
  collateralValue: string;
  grade: object;

  constructor(
    product: string,
    limit: string = null,
    score: number = null,
    collateralCoveragePercent: CollateralCoverage,
    collateralCoverageRatio: string,
    collateralValue: string = '0',
    grade: object = null
  ) {
    this.product = product;
    this.limit = limit;
    this.score = score;
    this.collateralCoveragePercent = collateralCoveragePercent;
    this.collateralCoverageRatio = collateralCoverageRatio;
    this.collateralValue = collateralValue;
    this.grade = grade;
  }

  color(): string {
    if (+this.score >= 175) {
      return 'success';
    }
    if (+this.score < 175 && +this.score >= 75) {
      return 'warning';
    }
    if (+this.score < 75) {
      return 'danger';
    }
  }
}
