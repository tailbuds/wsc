export class Facility {
  product: string;
  limit: number;
  collateralCoveragePercent: {
    cashMargin: string;
    bankGuaranteeOne: string;
    bankGuaranteeTwo: string;
    shares: string;
    freeholdFirstDegree: string;
    leaseholdFirstDegree: string;
    freeholdSecondDegree: string;
  };
  score: number;
}
