import React, { useState } from 'react';

type Currency = 'PKR' | 'USD';

// FIX: Defined a Plan type with an optional `popular` property to ensure type safety.
type Plan = {
  title: string;
  desc: string;
  prices: { [key in Currency]: number };
  features: { text: string; included: boolean }[];
  buttonText: string;
  popular?: boolean;
};

const plans: { [key: string]: Plan } = {
  basic: {
    title: 'Starter Website',
    desc: 'Perfect for new businesses that need an online presence.',
    prices: { PKR: 18000, USD: 65 },
    features: [
      { text: '1–3 Pages (Home, About, Contact)', included: true },
      { text: 'Mobile-friendly, responsive design', included: true },
      { text: 'Contact form / WhatsApp integration', included: true },
      { text: 'Social Media Icons', included: true },
      { text: 'Delivery in 3-5 Days', included: true },
      { text: 'E-commerce features', included: false },
    ],
    buttonText: 'Get Started',
  },
  standard: {
    title: 'Business Website',
    desc: 'A richer site with more pages and better customization.',
    prices: { PKR: 35000, USD: 125 },
    features: [
      { text: '4–6 Pages (Home, About, Services, etc.)', included: true },
      { text: 'Customized design with branding', included: true },
      { text: 'Google Maps, Social links & SEO-ready setup', included: true },
      { text: 'Delivery in 7–10 days', included: true },
    ],
    buttonText: 'Choose Standard',
    popular: true,
  },
  premium: {
    title: 'Advanced / E-commerce',
    desc: 'Everything you need for selling or advanced features.',
    prices: { PKR: 65000, USD: 230 },
    features: [
      { text: '7–12 Pages + Product Catalog', included: true },
      { text: 'E-commerce (cart, checkout, payments)', included: true },
      { text: 'Advanced features (booking, gallery)', included: true },
      { text: 'On-page SEO + 1 month free support', included: true },
    ],
    buttonText: 'Go Premium',
  },
};

const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>('PKR');

  return (
    <section id="pricing" className="py-20 bg-[#0b293e]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold">Website Design <span className="text-[#00abf0]">Pricing</span></h2>
          <p className="text-gray-300 mt-2">Transparent plans for every stage of your business. No hidden fees.</p>
          <div className="mt-6 flex justify-center items-center space-x-2">
            <span className={`font-semibold ${currency === 'PKR' ? 'text-[#00abf0]' : 'text-gray-400'}`}>PKR</span>
            <label htmlFor="currency-toggle" className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" id="currency-toggle" className="sr-only peer" checked={currency === 'USD'} onChange={() => setCurrency(c => c === 'PKR' ? 'USD' : 'PKR')} />
              <div className="w-11 h-6 bg-[#081b29] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00abf0]"></div>
            </label>
            <span className={`font-semibold ${currency === 'USD' ? 'text-[#00abf0]' : 'text-gray-400'}`}>USD</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.values(plans).map((plan, index) => (
            <article key={index} className="relative bg-[#081b29] p-8 rounded-lg border-2 border-transparent hover:border-[#00abf0] transition-all duration-300 flex flex-col transform hover:-translate-y-2 shadow-lg shadow-[#000000]/30" data-animate="fade-in-up">
              {plan.popular && <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#00abf0] text-[#081b29] px-4 py-1 text-sm font-bold rounded-full">Most Popular</span>}
              <h3 className="text-xl font-bold uppercase tracking-wider text-[#00abf0]">{plan.title}</h3>
              <p className="text-gray-400 my-4 flex-grow">{plan.desc}</p>
              <div className="my-4">
                <span className="text-5xl font-extrabold">{currency === 'USD' ? '$' : ''}{plan.prices[currency].toLocaleString()}</span>
                <span className="text-gray-400">/{currency === 'PKR' ? 'one-time' : 'one-time'}</span>
              </div>
              <a href="#contact" className="w-full text-center mt-4 px-8 py-3 bg-[#00abf0] text-[#081b29] rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_10px_#00abf0]">
                {plan.buttonText}
              </a>
              <ul className="mt-8 space-y-3 border-t border-gray-700 pt-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start gap-3 ${!feature.included && 'text-gray-500 line-through'}`}>
                    {feature.included ? 
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      :
                      <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    }
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;