import { Page } from '../../components/Page/Page';
import PricingCard from './components/PricingCard/PricingCard';
import { Footer } from '../../components/Footer/Footer';
import { cards, plans, features } from './Data';
import { PricingTable } from './components/PricingTable/PricingTable';
import { Navbar } from '../../components/Navbar/Navbar';
export function Pricing() {
  return (
    <Page>
      {/* upper container */}
      <div className="flex-col px-xxxl py-xxl pb-[240px] items-center gap-xl self-stretch">
        {/* section title */}
        <div className="flex-col max-w-[1000px] items-center gap-sm">
          <p className="display-lg text-center text-gray-white ">
            Plans and Pricing
          </p>
          <p className="text-lg text-center text-gray-4 ">
            Start for free and scale as you go.
          </p>
        </div>

        {/* pricing cards */}
        <div className="flex max-w-[1000px] items-start content-start gap-y-[24px] gap-x-[20px]  flex-wrap">
          {cards.map((card, index) => (
            <PricingCard {...card} key={index} />
          ))}
        </div>
        {/* pricing table */}
        <div className="flex-col max-w-[1000px] gap-sm w-full">
          <div className="display-sm">Compare Plans and Features</div>
          <PricingTable plans={plans} features={features} />
        </div>
      </div>
    </Page>
  );
}
