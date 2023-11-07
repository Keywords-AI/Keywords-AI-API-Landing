import { Check } from 'src/app/components/icons';
import { ArrowRight } from '../../components/icons';
export const plans = [
  { name: 'Flex 8k', key: 'f8k' },
  { name: 'Flex 32k', key: 'f32k' },
  { name: 'Custom', key: 'custom' },
];

export const features = [
  {
    title: 'Free trial tokens',
    f8K: '40k',
    f32K: '40k',
    custom: '-',
  },
  {
    title: 'Context window',
    f8K: '8k',
    f32K: '32k',
    custom: 'Up tp 32k',
  },
  {
    title: 'input tokens',
    f8K: (
      <div className="flex-row">
        {'$0.02'}
        <span className="text-gray-4">&nbsp;{'/ 1k tokens'}</span>
      </div>
    ),
    f32K: (
      <div className="flex-row">
        {'$0.04'}
        <span className="text-gray-4">&nbsp;{'/ 1k tokens'}</span>
      </div>
    ),
    custom: '-',
  },
  {
    title: 'output tokens',
    f8K: (
      <div className="flex-row">
        {'$0.04'}
        <span className="text-gray-4">&nbsp;{'/ 1k tokens'}</span>
      </div>
    ),
    f32K: (
      <div className="flex-row">
        {'$0.08'}
        <span className="text-gray-4">&nbsp;{'/ 1k tokens'}</span>
      </div>
    ),
    custom: '-',
  },
  {
    title: 'Cost reduction vs GPT-4',
    f8K: '33%',
    f32K: '33%',
    custom: 'Up to 40%',
  },
  {
    title: 'Usage limit',
    f8K: 'Unlimited',
    f32K: 'Unlimited',
    custom: 'Unlimited',
  },
  {
    title: 'Rate limit',
    f8K: (
      <div className="flex-row">
        <span>{'40K tokens '}</span>
        <span className="text-gray-4">&nbsp;{'/ min'}</span>
      </div>
    ),
    f32K: (
      <div className="flex-row">
        <span>{'40K tokens '}</span>
        <span className="text-gray-4">&nbsp;{'/ min'}</span>
      </div>
    ),
    Custom: (
      <div className="flex-row">
        <span>{'Up to 120K tokens '}</span>
        <span className="text-gray-4">&nbsp;{'/ min'}</span>
      </div>
    ),
  },
  {
    title: 'API keys',
    f8K: 'Unlimited',
    f32K: 'Unlimited',
    custom: 'Unlimited',
  },
  {
    title: 'Users',
    f8K: 'Unlimited',
    f32K: 'Unlimited',
    custom: 'Unlimited',
  },
  {
    title: 'OpenAI-style integration',
    f8K: <Check />,
    f32K: <Check />,
    custom: <Check />,
  },
  {
    title: 'Usage tracking',
    f8K: <Check />,
    f32K: <Check />,
    custom: <Check />,
  },
  {
    title: 'Priority support',
    f8K: <Check />,
    f32K: <Check />,
    custom: <Check />,
  },
];

export const cards = [
  {
    title: 'Flex 8k',
    description:
      'Usage-based plan with a 8k context window, ideal for most AI applications.',
    price: '$0.02',
    priceDescription: (
      <span className="text-md-regular text-gray-4">
        {'First '}
        <span className="text-md-rmedium text-gray-white">40K</span>
        {' tokens free'}
      </span>
    ),
    featureTitle: 'Flex 8k plan features:',
    button: (
      <button
        className={
          'button-primary bg-gray-white text-sm-regular text-center flex-1 text-gray-black self-stretch'
        }
        onClick={() => navigate('/platform/organization/usage')}
      >
        <span>{'Start free trial'}</span>
      </button>
    ),
    currentPlan: 'View Usage Details',
    upgradeButton: {
      text: 'Add subscription',
      className: 'button-primary self-stretch',
      onClick: () => {
        if (!user.email) navigate('/signup?next=/platform/pricing');
        else {
          createPaymentSession({
            lookup_keys: [
              'keywordsai_flex_8k_input',
              'keywordsai_flex_8k_output',
            ],
          });
        }
      },
    },
    downgradeButton: {
      text: 'Add subscription',
      className: 'button-primary self-stretch',
      onClick: () => {
        if (!user.email) navigate('/signup?next=/platform/pricing');
        else {
          createPaymentSession({
            lookup_keys: [
              'keywordsai_flex_8k_input',
              'keywordsai_flex_8k_output',
            ],
          });
        }
      },
    },
    features: [
      '40K free trial tokens',
      '8K context window',
      '$0.02 / 1K input tokens',
      '$0.04 / 1K output tokens',
      'Testing playground',
      'Email support',
    ],
    plan: 'flex_8k',
    rank: 2,
  },
  {
    title: 'Flex 32k',
    description:
      'Usage-based plan with a 32k context window, perfect for context-rich AI products.',
    price: '$0.04',
    priceDescription: (
      <span className="text-md-regular text-gray-4">
        {'First '}
        <span className="text-md-rmedium text-gray-white">40K</span>
        {' tokens free'}
      </span>
    ),
    featureTitle: 'Flex 32k plan features:',
    currentPlan: 'View Usage Details',
    button: (
      <button
        className={
          'button-primary bg-gray-white text-sm-regular text-center flex-1 text-gray-black self-stretch'
        }
        onClick={() => navigate('/platform/organization/usage')}
      >
        <span>{'Start free trial'}</span>
      </button>
    ),
    upgradeButton: {
      text: 'Add subscription',
      className: 'button-primary self-stretch',
      onClick: () => {
        if (!user.email) navigate('/signup?next=/platform/pricing');
        else {
          createPaymentSession({
            lookup_keys: [
              'keywordsai_flex_32k_input',
              'keywordsai_flex_32k_output',
            ],
          });
        }
      },
    },
    downgradeButton: {
      text: 'Add subscription',
      className: 'button-primary self-stretch',
      onClick: () => {
        if (!user.email) navigate('/signup?next=/platform/pricing');
        else {
          createPaymentSession({
            lookup_keys: [
              'keywordsai_flex_32k_input',
              'keywordsai_flex_32k_output',
            ],
          });
        }
      },
    },
    features: [
      '40K free trial tokens',
      '32K context window',
      '$0.04 / 1K input tokens',
      '$0.08 / 1K output tokens',
      'Testing playground',
      'Email support',
    ],
    plan: 'flex_32k',
    rank: 3,
  },
  {
    title: 'Custom',
    description:
      'Design a custom package. For businesses with large volume or unique use cases.',
    featureTitle: 'Custom plan features:',
    button: (
      <div className="flex self-stretch gradient-out p-[1px]">
        <button
          className={
            'button-secondary-black text-sm-regular text-center text-gray-white flex-1 self-stretch bg-gray-black'
          }
          onClick={() => navigate('/platform/organization/usage')}
        >
          <span>{'Talk to us'}</span>
          <ArrowRight fill="fill-gray-white" />
        </button>
      </div>
    ),
    currentPlan: 'View Usage Details',
    features: [
      'Volume discounts',
      'Custom usage plan',
      'Integration assistance',
      'Increased rate limit',
      'Testing playground',
      'CTO priority support',
    ],
    plan: 'custom',
    rank: 4,
  },
];
