import type { PackingItem, PackingConfig, GearRecommendation } from './packing-base';

export const BRAZIL_ESSENTIALS: PackingItem[] = [
  { id: 'br-safety', name: 'Security Pouch / Money Belt', category: 'destination', description: 'Rio and São Paulo require street smarts about valuables. Keep your real wallet and passport in a hidden pouch. Carry a "decoy wallet" with $20 and an expired card for any confrontations.', essential: true, amazonSearchFallback: 'money+belt+hidden+security+pouch', affiliatePrice: '$15–25' },
  { id: 'br-repellent', name: 'DEET Insect Repellent', category: 'destination', description: 'Dengue and Zika are present in tropical areas of Brazil. DEET-based repellent is essential, especially in the Amazon, Pantanal, and Iguazu Falls region.', essential: true, amazonSearchFallback: 'deet+insect+repellent+tropical', affiliatePrice: '$8–15' },
  { id: 'br-adapter', name: 'Type N Adapter (Brazil-specific)', category: 'destination', description: 'Brazil uses Type N plugs — unique rounded 3-pin standard adopted in 2011. Older buildings may have Type A/C sockets. A universal adapter is the safest choice.', essential: true, amazonSearchFallback: 'universal+travel+adapter+type+n+brazil', affiliatePrice: '$15–25' },
  { id: 'br-swimwear', name: 'Brazilian-Style Swimwear', category: 'destination', description: 'Copacabana and Ipanema have specific beach culture around swimwear. Over-sized board shorts look tourist-obvious. Brazilian brands fit the scene — or buy on arrival at beach vendors.', essential: false, localAlternative: 'Buy at any Copacabana beach vendor for R$30–80 on arrival' },
];

export const BRAZIL_GEAR_RECOMMENDATIONS: GearRecommendation[] = [
  { id: 'gr-br-pouch', name: 'Hidden Security Pouch', reason: 'Rio and São Paulo are world-class cities with world-class pickpockets. A flat hidden money belt under your clothes is the difference between a great trip and losing everything on day one.', amazonSearchFallback: 'hidden+money+belt+travel+security+flat', affiliatePrice: '~$18' },
  { id: 'gr-br-repellent', name: 'DEET Insect Repellent', reason: 'Dengue and Zika are present in Brazil\'s tropical regions. The Amazon, Pantanal, and Iguazu Falls are high-risk zones. DEET is non-negotiable for any inland or rainforest travel.', amazonSearchFallback: 'deet+insect+repellent+tropical+strong', affiliatePrice: '~$9' },
  { id: 'gr-br-adapter', name: 'Universal Travel Adapter (Type N)', reason: 'Brazil\'s Type N plug is unique and many universal adapters don\'t include it. Get a genuinely universal adapter that explicitly lists Type N — not just a cheap Type A/C set.', amazonSearchFallback: 'universal+travel+adapter+type+n+brazil', affiliatePrice: '~$20' },
  { id: 'gr-br-sunscreen', name: 'Reef-Safe Sunscreen (SPF 50+)', reason: 'Brazilian beaches have serious UV — Copacabana at noon will burn you in 20 minutes. Reef-safe brands protect the coral reefs off Fernando de Noronha and Bonito.', amazonSearchFallback: 'reef+safe+sunscreen+spf+50+tropical', affiliatePrice: '~$14' },
  { id: 'gr-br-towel', name: 'Quick-Dry Travel Towel', reason: 'Brazilian beach culture is towel-on-sand all day. Your hotel towel won\'t leave the room. A quick-dry travel towel is beach-ready in 30 minutes and packs to nothing.', amazonSearchFallback: 'quick+dry+microfiber+travel+towel+beach', affiliatePrice: '~$18' },
];

export const BRAZIL_CONFIG: PackingConfig = {
  sitePrefix: 'dbr',
  destination: 'Brazil',
  climate: ['tropical', 'coastal'],
  currency: 'BRL',
  plugType: 'Type N',
  plugVoltage: '127V/220V',
  affiliateTag: 'discovermore-20',
  destinationEssentials: BRAZIL_ESSENTIALS,
  gearRecommendations: BRAZIL_GEAR_RECOMMENDATIONS,
};

export const SITE_CONFIG = BRAZIL_CONFIG;

export const BRAZIL_PACKING_FAQS = [
  { question: 'What should I pack for Brazil?', answer: 'The essentials are a hidden security pouch (Rio and São Paulo have active pickpockets), DEET insect repellent for dengue/Zika in tropical areas, a Brazil-specific Type N adapter (unique to Brazil and often missed by basic universal adapters), and SPF 50+ sunscreen. Our interactive checklist covers 60+ items for Brazil\'s tropical climate.' },
  { question: 'Is Brazil safe? What security precautions should I pack?', answer: 'Brazil requires street smarts, not paranoia. The practical prep: carry a hidden money belt under your clothes for passport and main cash, bring a "decoy wallet" with $20 and an expired card for any confrontations, don\'t wear expensive jewelry or display your phone unnecessarily. Follow these basics and the vast majority of Brazil trips are trouble-free.' },
  { question: 'What power adapter do I need for Brazil?', answer: 'Brazil adopted Type N plugs in 2011 — a unique 3-pin rounded standard found almost nowhere else. Many "universal" adapters don\'t include Type N. Check your adapter explicitly lists Type N. Older buildings may still have Type A or C sockets. Voltage varies by region: 127V in Rio and São Paulo, 220V in some other cities.' },
  { question: 'Can I buy toiletries in Brazil?', answer: 'Yes — Farmácias and drugstores (Raia, Drogasil) are everywhere in Brazilian cities. Basic toiletries are widely available. Bring DEET repellent from home (brands vary in quality), your specific sunscreen preference, and prescription medications. Brazilian personal care products are actually very good.' },
  { question: 'How many outfits should I pack for Brazil?', answer: 'Pack for 5–7 days. Laundry services are available in all major cities ($2–5/load), and most mid-range accommodation has laundry. For Rio beach culture: pack 2 swimsuits and beach coverups. Brazilian fashion is casual and stylish — you don\'t need formal wear for most situations.' },
  { question: 'What should I NOT bring to Brazil?', answer: 'Expensive jewelry or visible luxury items (a target in tourist areas). Your real wallet to the beach (leave it in the hotel safe — bring just what you need). Type A-only adapters (you need Type N specifically). And don\'t underestimate mosquito protection in jungle or Amazon regions.' },
];
