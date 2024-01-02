import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$0', '2': '$0' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: '792f308d-8108-4ceb-867a-48ce3c5b65ef',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    id: 'bc4c1ae2-bab4-4599-baff-81cc6c6d43db',
    value: '2',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
