export default interface ICreateLeadDTO {
  usdot: string;
  entityType?: string;
  operatingStatus?: string;
  companyName?: string;
  fullName?: string;
  primaryAddress?: string;
  state?: string;
  zipCode?: string;
  altAddress?: string;
  altState?: string;
  altZipCode?: string;
  phoneNumber?: string;
  powerUnits?: string;
  drivers?: string;
  mcs150FormDate?: string;
  operationClassification?: string;
  carrierOperation?: string;
  cargoCarried?: string;
  email?: string;
  bipdInsuranceRequired?: string;
  cargoInsuranceRequired?: string;
  bondInsuranceRequired?: string;
  insuranceCarrier?: string;
  policySurety?: string;
  postedDate?: string;
  coverageFrom?: string;
  coverageTo?: string;
  effectiveDate?: string;
  cancellationDate?: string;
}