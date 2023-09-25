export interface IProducts {
  details: IProductItem[];
}

export interface IProductItem {
  id: number;
  brand: {
    name: string;
    externalCode: string;
  };
  detailScanCodes?: any[];
  displayBrand: string;
  article: string;
  title: string;
  quantity: number;
  yourPrice: IPrice;
  yourPriceUAH: IPrice;
  yourPriceEUR: IPrice;
  remains: IRemains[];
  category: {
    name: string;
  };
  modifier: number;
  isDisabled: boolean;
  hasPartnerRemain: boolean;
  multiplicity: number;
}

export interface IRemains {
  storage: {
    id: number;
    name: string;
    originalName: string;
  };
  remain: string;
}

export interface IPrice {
  amount: number;
  currency: {
    code: string;
  };
}

export interface IDetailUsage {
  items: IItemUsage[];
}

export interface IItemUsage {
  manufacturer: string;
  models: IModel[];
}

export interface IModel {
  model: string;
  cars: ICar[];
}

export interface ICar {
  car: string;
  startDateAt: string;
  engine: string;
  capacity: string;
  capacityHpFrom: string;
  capacityKwFrom: string;
}

export interface ICharacteristic {
  attribute: {
    name: string;
    title: string;
    priority: number;
  };
  value: string;
}

export interface ITableTypes {
  results: string;
  analogs: string;
}
