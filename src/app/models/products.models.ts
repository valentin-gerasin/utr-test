import {
  ICharacteristic,
  IItemUsage,
  IProductItem,
} from '../interfaces/products.interfaces';

export const mockItem: IProductItem = {
  multiplicity: 1,
  id: 3519,
  brand: {
    name: 'BOSCH',
    externalCode: '00007',
  },
  displayBrand: 'BOSCH',
  article: '0242240592',
  title: 'Свічка WR6DCE 0.8',
  quantity: 1,
  yourPrice: {
    amount: 41.19,
    currency: {
      code: 'UAH',
    },
  },
  yourPriceUAH: {
    amount: 41.19,
    currency: {
      code: 'UAH',
    },
  },
  yourPriceEUR: {
    amount: 1.01,
    currency: {
      code: 'EUR',
    },
  },
  remains: [
    {
      storage: { id: 10, name: 'name', originalName: 'originalName' },
      remain: '>10',
    },
  ],
  detailScanCodes: [
    {
      scanCode: '3165143134429',
    },
    {
      scanCode: '3165143527153',
    },
  ],
  category: {
    name: 'Свечи зажигания',
  },
  modifier: 1.5,
  isDisabled: false,
  hasPartnerRemain: false,
};

export const mockDetailsUsage: IItemUsage[] = [
  {
    manufacturer: 'CHEVROLET',
    models: [
      {
        model: 'AGILE 1',
        cars: [
          {
            car: '1.4 LTZ Flexaaaaaaaaaaaaa',
            startDateAt: '2009-10-01 00:00:00',
            engine: 'N 14 YF',
            capacity: '1.4',
            capacityHpFrom: '102',
            capacityKwFrom: '75',
          },
          {
            car: '1.5 LTZ Flexbbbbbbbbbbbb',
            startDateAt: '2009-10-01 00:00:00',
            engine: 'Naaa 14 YF',
            capacity: '1.8',
            capacityHpFrom: '102',
            capacityKwFrom: '75',
          },
        ],
      },
      {
        model: 'AGILE 2',
        cars: [
          {
            car: '1.5 LTZ Flexcccccccccccccc',
            startDateAt: '2009-10-01 00:00:00',
            engine: 'N 14 YF',
            capacity: '1.4',
            capacityHpFrom: '102',
            capacityKwFrom: '75',
          },
          {
            car: '1.5 LTZ Flexddddddddddd',
            startDateAt: '2009-10-01 00:00:00',
            engine: 'Naaa 14 YF',
            capacity: '1.8',
            capacityHpFrom: '102',
            capacityKwFrom: '75',
          },
        ],
      },
    ],
  },

  {
    manufacturer: 'GM Korea',
    models: [
      {
        model: 'Lanos 1',
        cars: [
          {
            car: '1.4aaaaaaaa LTZ Flex',
            startDateAt: '2009-10-01 00:00:00',
            engine: 'N 14 YF',
            capacity: '1.4',
            capacityHpFrom: '102',
            capacityKwFrom: '75',
          },
          {
            car: '1.5bbbbbbbb LTZ Flex',
            startDateAt: '2009-10-01 00:00:00',
            engine: 'N 14 YF',
            capacity: '1.8',
            capacityHpFrom: '102',
            capacityKwFrom: '75',
          },
        ],
      },
      {
        model: 'Lanos 2',
        cars: [
          {
            car: '1.4 ccccccccLTZ Flex',
            startDateAt: '2009-10-01 00:00:00',
            engine: 'N 14 YF',
            capacity: '1.4',
            capacityHpFrom: '102',
            capacityKwFrom: '75',
          },
          {
            car: '1.5 ddddddddLTZ Flex',
            startDateAt: '2009-10-01 00:00:00',
            engine: 'N 14 YF',
            capacity: '1.8',
            capacityHpFrom: '102',
            capacityKwFrom: '75',
          },
        ],
      },
    ],
  },
];

export const mockICharacteristic: ICharacteristic[] = [
  {
    attribute: {
      name: 'Ø окружності центрів отворів [мм]',
      title: 'Ø окружності центрів отворів [мм]',
      priority: 0,
    },
    value: '139,7',
  },
  {
    attribute: {
      name: 'Висота [мм]',
      title: 'Висота [мм]',
      priority: 0,
    },
    value: '46,2',
  },
  {
    attribute: {
      name: 'відповідає вимогам стандарту ЕКЄ',
      title: 'відповідає вимогам стандарту ЕКЄ',
      priority: 0,
    },
    value: 'ECE-R90',
  },
  {
    attribute: {
      name: 'Ø окружності центрів отворів [мм]',
      title: 'Ø окружності центрів отворів [мм]',
      priority: 0,
    },
    value: '139,7',
  },
  {
    attribute: {
      name: 'Висота [мм]',
      title: 'Висота [мм]',
      priority: 0,
    },
    value: '46,2',
  },
  {
    attribute: {
      name: 'відповідає вимогам стандарту ЕКЄ',
      title: 'відповідає вимогам стандарту ЕКЄ',
      priority: 0,
    },
    value: 'ECE-R90',
  },
  {
    attribute: {
      name: 'Ø окружності центрів отворів [мм]',
      title: 'Ø окружності центрів отворів [мм]',
      priority: 0,
    },
    value: '139,7',
  },
  {
    attribute: {
      name: 'Висота [мм]',
      title: 'Висота [мм]',
      priority: 0,
    },
    value: '46,2',
  },
  {
    attribute: {
      name: 'відповідає вимогам стандарту ЕКЄ',
      title: 'відповідає вимогам стандарту ЕКЄ',
      priority: 0,
    },
    value: 'ECE-R90',
  },
];
