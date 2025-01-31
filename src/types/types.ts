export interface STSpacecraft {
  uid: string;
  name: string;
  registry: string | null;
  status: string | null;
  dateStatus: string | null;
  spacecraftClass: STSpacecraftClass | null;
  owner: STOwner | null;
  operator: STOperator | null;
  affiliation?: STAffiliation | null;
}

interface STSpacecraftClass {
  uid: string;
  name: string;
  numberOfDecks: 0;
  crew: string;
  warpCapable: true;
  mirror: true;
  alternateReality: true;
  activeFrom: string;
  activeTo: string;
  species: {
    uid: string;
    name: string;
  };
}

interface STOwner {
  uid: string;
  name: string;
  government: true;
  intergovernmentalOrganization: true;
  researchOrganization: true;
  sportOrganization: true;
  medicalOrganization: true;
  militaryOrganization: true;
  militaryUnit: true;
  governmentAgency: true;
  lawEnforcementAgency: true;
  prisonOrPenalColony: true;
  mirror: true;
  alternateReality: true;
}

interface STOperator {
  uid: string;
  name: string;
  government: true;
  intergovernmentalOrganization: true;
  researchOrganization: true;
  sportOrganization: true;
  medicalOrganization: true;
  militaryOrganization: true;
  militaryUnit: true;
  governmentAgency: true;
  lawEnforcementAgency: true;
  prisonOrPenalColony: true;
  mirror: true;
  alternateReality: true;
}

interface STAffiliation {
  uid: string;
  name: string;
  government: true;
  intergovernmentalOrganization: true;
  researchOrganization: true;
  sportOrganization: true;
  medicalOrganization: true;
  militaryOrganization: true;
  militaryUnit: true;
  governmentAgency: true;
  lawEnforcementAgency: true;
  prisonOrPenalColony: true;
  mirror: true;
  alternateReality: true;
}
