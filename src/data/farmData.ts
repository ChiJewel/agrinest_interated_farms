export interface FarmDivision {
  id: string;
  name: string;
  category: 'crops' | 'vegetables' | 'poultry' | 'livestock' | 'logistics';
  headline: string;
  description: string;
  image: string;
  keyFeatures: string[];
  metrics: { label: string; value: string }[];
  products: string[];
  standards: string[];
}

export interface CatalogItem {
  id: string;
  name: string;
  category: 'crops' | 'vegetables' | 'poultry' | 'livestock' | 'seeds' | 'chicks' | 'services';
  description: string;
  specification: string;
  unit: string;
  estimatedPrice: string;
  priceNumber: number;
  availability: 'Available Daily' | 'In Harvest' | 'Pre-Order / Contract' | 'Seasonal Batch';
  image: string;
  minimumOrder: string;
  nutritionalHighlight: string;
}

export const FARM_DIVISIONS: FarmDivision[] = [
  {
    id: 'crops',
    name: 'Precision Crop Cultivation',
    category: 'crops',
    headline: 'Large-Scale Arable Farming & Grain Production',
    description: 'Operating on fertile agricultural tracts along the Lagos-Ibadan corridor, our crop division utilizes precision mechanized planting, soil nutrient telemetry, and drip-pivot hybrid irrigation to produce high-yield staple crops.',
    image: '/images/crops-division.jpg',
    keyFeatures: [
      'Hybrid Yellow & White Maize cultivation for agro-allied food processing & premium feed mills',
      'High-starch Cassava varieties engineered for industrial starch processors and flour millers',
      'Soya Bean and Sorghum production with strict moisture-controlled silo storage',
      'Zero-residue soil management through organic biological enrichment'
    ],
    metrics: [
      { label: 'Annual Grain Yield', value: '3,500+ MT' },
      { label: 'Moisture Control Silos', value: '< 12% Moisture' },
      { label: 'Irrigation Coverage', value: '100% Automated' }
    ],
    products: ['Feed-grade Yellow Maize', 'Food-grade White Maize', 'Industrial Cassava Tubers', 'Soybeans & Oilseeds', 'Clean Grain Silo Batches'],
    standards: ['Global G.A.P. Aligned', 'Aflatoxin-Tested Silos', '100% Non-GMO Certified Strains']
  },
  {
    id: 'vegetables',
    name: 'Greenhouse & Horticulture',
    category: 'vegetables',
    headline: 'High-Tech Protected Vegetable Cultivation',
    description: 'Our climate-controlled Dutch-standard greenhouses and drip-fed open beds grow premium, export-grade horticulture year-round, shielded from pests and tropical heat extremes without harmful synthetic pesticides.',
    image: '/images/vegetables-greenhouse.jpg',
    keyFeatures: [
      'Climate-controlled multi-span polyhouse systems with automated misting and ventilation',
      'Plump Sweet Bell Peppers (Red, Yellow, Green) and aromatic Scotch Bonnet (Habanero)',
      'Cluster Vine Tomatoes, Beefsteak varieties, and seedless English Cucumbers',
      'Fresh indigenous and exotic culinary greens: Ugu (fluted pumpkin), Shoko, Tete, and Sweet Basil'
    ],
    metrics: [
      { label: 'Daily Harvest Capacity', value: '4.5+ Tons' },
      { label: 'Pesticide Reduction', value: '98% Bio-control' },
      { label: 'Shelf Life Longevity', value: '+5 Days vs Open Field' }
    ],
    products: ['Red & Yellow Bell Peppers', 'Habanero / Rodo Peppers', 'Vine-Ripened Cluster Tomatoes', 'Crisp Greenhouse Cucumbers', 'Clean Farm-Washed Ugu & Spinach'],
    standards: ['MRL Zero Residue Compliance', 'Food-Grade Clean Packing', 'Same-Day Cold Chain Dispatch']
  },
  {
    id: 'poultry',
    name: 'Commercial Biosecure Poultry',
    category: 'poultry',
    headline: 'Automated Layer & Broiler Production Facilities',
    description: 'Equipped with computer-regulated climate ventilation, automated nipple-drinking lines, and strict biosecurity airlocks, our poultry complex produces pristine table eggs and tender broilers under world-class veterinary oversight.',
    image: '/images/poultry-division.jpg',
    keyFeatures: [
      'Automated climate-regulated poultry houses with evaporative cooling pads',
      'Grade-A Brown Table Eggs with deep golden yolks enriched through natural maize diets',
      'Fast-growing, humanely raised Broilers processed in modern sanitary conditions',
      'Day-Old Chicks (DOCs) from proven parent stock with superior feed-conversion ratios'
    ],
    metrics: [
      { label: 'Daily Egg Production', value: '120,000+ Eggs' },
      { label: 'Flock Capacity', value: '150,000+ Birds' },
      { label: 'Veterinary Biosecurity', value: 'Level 3 Airlock Protocol' }
    ],
    products: ['Commercial Table Eggs (Crates of 30)', 'Whole Dressed Broiler Chickens', 'Cut-ups & Premium Parts', 'Day-Old Pullets & Broilers', 'Organic Poultry Manure for Fertilizer'],
    standards: ['NAFDAC & Veterinary Certified', 'Salmonella-Free Monitored', 'Hormone & Antibiotic-Free Finish']
  },
  {
    id: 'livestock',
    name: 'Livestock & Pasture Husbandry',
    category: 'livestock',
    headline: 'Ethical Rearing of Cattle, Goats & Sheep',
    description: 'Spread over lush fenced pastures with dedicated rotational paddock systems, our livestock thrive on organic silage, clean borehole mineral water, and preventive veterinary care, delivering healthy breeding stock and premium meat.',
    image: '/images/livestock-division.jpg',
    keyFeatures: [
      'Specially selected White Fulani, Sokoto Gudali, and crossbred beef cattle with traceable tagging',
      'Premium Kalahari Red and West African Dwarf goats raised on organic pasture and legumes',
      'Humane handling pens and automated fresh mineral lick stations',
      'Dedicated veterinary quarantine, bi-weekly health screening, and vaccination logging'
    ],
    metrics: [
      { label: 'Active Herd Size', value: '1,200+ Head' },
      { label: 'Pasture Area', value: 'Rotational Fenced' },
      { label: 'Feed Formulation', value: '100% Farm-Grown Forage' }
    ],
    products: ['Live Feedlot Finished Cattle', 'Prime Grass-fed Beef Carcasses', 'Breeding Rams & Ewes', 'Pedigree Boer & WAD Goats', 'Seasoned Livestock Manure'],
    standards: ['Traceable Ear-Tag Registry', 'Humane Stockmanship Standard', 'Routine Veterinary Certification']
  },
  {
    id: 'logistics',
    name: 'Agro-Processing & Cold Chain',
    category: 'logistics',
    headline: 'Rapid Gateway Distribution on Lagos-Ibadan Expressway',
    description: 'Our strategic location at Plot 1-6 Freedom Way gives AgriNest immediate highway access to distribute temperature-controlled farm produce directly to supermarket chains, hotels, restaurants, and bulk off-takers across Lagos, Ogun, and Oyo.',
    image: '/images/modern-distribution.jpg',
    keyFeatures: [
      'Industrial on-site cold storage (-20°C freezing & 4°C vegetable chill rooms)',
      'Automated egg sorting, grading, and eco-friendly carton packaging lines',
      'Fleet of insulated refrigerated transport vans for uninterrupted cold chain delivery',
      'Dedicated express loading bays for 10-ton and 30-ton corporate off-take haulage trucks'
    ],
    metrics: [
      { label: 'Corridor Transit Time', value: '35 mins to Lagos Berger' },
      { label: 'Cold Storage Capacity', value: '450 Metric Tons' },
      { label: 'On-time Dispatch Rate', value: '99.4%' }
    ],
    products: ['Bulk Palletized Distribution', 'Custom Supermarket Packaging', 'Contract Cold-Haulage Deliveries', 'On-Site Express Weighbridge Services'],
    standards: ['Cold Chain ISO Protocols', 'HACCP Compliant Warehouse', 'Rapid Express Waybill System']
  }
];

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 'prod-eggs',
    name: 'AgriNest Farm-Fresh Brown Eggs (Grade A)',
    category: 'poultry',
    description: 'Candled, graded, and packed within hours of laying. Featuring vibrant golden yolks, sturdy shells, and superior shelf stability.',
    specification: 'Large & Jumbo Sizes (55g - 65g/egg), 30 eggs per paper pulp tray',
    unit: 'Per Crate (30 Eggs)',
    estimatedPrice: '₦4,800',
    priceNumber: 4800,
    availability: 'Available Daily',
    image: '/images/fresh-produce.jpg',
    minimumOrder: '50 Crates (Wholesale) / Retail Pickup Available',
    nutritionalHighlight: 'High Protein, Rich in Choline, Vitamin D & Omega-3'
  },
  {
    id: 'prod-peppers',
    name: 'Greenhouse Sweet Bell Peppers (Red & Yellow)',
    category: 'vegetables',
    description: 'Hand-harvested from our controlled climate greenhouses. Thick walls, crisp sweet flesh, ideal for gourmet hospitality and retail shelves.',
    specification: 'Sorted by grade (180g - 250g each), packed in ventilated 10kg crates',
    unit: 'Per 10kg Crate',
    estimatedPrice: '₦18,500',
    priceNumber: 18500,
    availability: 'In Harvest',
    image: '/images/vegetables-greenhouse.jpg',
    minimumOrder: '5 Crates (50kg)',
    nutritionalHighlight: '300% Daily Value Vitamin C, Powerful Antioxidants'
  },
  {
    id: 'prod-tomatoes',
    name: 'Vine-Ripened Cluster Tomatoes',
    category: 'vegetables',
    description: 'Firm, naturally sweetened cluster tomatoes ripened evenly on the vine. Thick pericarp minimizes transit bruising and guarantees long shelf life.',
    specification: 'Uniform size grading, packed in clean 25kg wooden/plastic field crates',
    unit: 'Per 25kg Basket / Crate',
    estimatedPrice: '₦22,000',
    priceNumber: 22000,
    availability: 'In Harvest',
    image: '/images/fresh-produce.jpg',
    minimumOrder: '10 Crates',
    nutritionalHighlight: 'Rich in Lycopene, Potassium & Vitamin K'
  },
  {
    id: 'prod-broilers',
    name: 'Premium Whole Dressed Broiler Chickens',
    category: 'poultry',
    description: 'Hygienically slaughtered, blast-chilled, and vacuum-sealed. Naturally plump, tender meat with no hormonal injections.',
    specification: 'Average weight 1.5kg – 2.2kg eviscerated, individually bagged',
    unit: 'Per Whole Dressed Bird',
    estimatedPrice: '₦4,500',
    priceNumber: 4500,
    availability: 'Available Daily',
    image: '/images/poultry-division.jpg',
    minimumOrder: '2 Cartons (20 Birds)',
    nutritionalHighlight: 'Lean, High-Digestibility Protein, Zero Growth Hormones'
  },
  {
    id: 'prod-maize',
    name: 'Clean Yellow Maize (Animal Feed & Industrial Grade)',
    category: 'crops',
    description: 'Aspirated, machine-cleaned grain with strictly monitored moisture content below 12%. Specially favored by top Nigerian feed mills and starch refiners.',
    specification: 'Grade 1 Quality, Low aflatoxin (< 10 ppb), 50kg polypropylene woven sacks',
    unit: 'Per 50kg Bag',
    estimatedPrice: '₦38,000',
    priceNumber: 38000,
    availability: 'Available Daily',
    image: '/images/crops-division.jpg',
    minimumOrder: '2 Metric Tons (40 Bags)',
    nutritionalHighlight: 'High Energy Carbohydrates, Natural Carotenoids'
  },
  {
    id: 'prod-cattle',
    name: 'Feedlot Finished Beef Cattle & Steers',
    category: 'livestock',
    description: 'Pasture-fed and grain-finished for optimal marble score and dressing percentage. Maintained under certified veterinary vaccination schedules.',
    specification: 'Live weight 320kg – 480kg with digital weighbridge verification',
    unit: 'Per Head (Live Weight)',
    estimatedPrice: '₦850,000',
    priceNumber: 850000,
    availability: 'Available Daily',
    image: '/images/livestock-division.jpg',
    minimumOrder: '1 Head (Bulk discounts on 10+ truckloads)',
    nutritionalHighlight: 'High Bioavailable Iron, Zinc & Essential Amino Acids'
  },
  {
    id: 'prod-goats',
    name: 'Healthy Meat Goats & Pedigree Breeding Stock',
    category: 'livestock',
    description: 'Robust Boer crossbred and West African Dwarf goats reared on clean forage and leguminous fodder. Resistant, energetic, and tender meat profile.',
    specification: 'Weight 22kg – 45kg live weight, ear-tagged with health certificate',
    unit: 'Per Head (Live Weight)',
    estimatedPrice: '₦75,000',
    priceNumber: 75000,
    availability: 'Available Daily',
    image: '/images/livestock-division.jpg',
    minimumOrder: '2 Goats / Rams',
    nutritionalHighlight: 'Low in Saturated Fats, Tender Gourmet Quality'
  },
  {
    id: 'prod-cucumbers',
    name: 'Crisp Hydroponic Cucumbers',
    category: 'vegetables',
    description: 'Seedless, thin-skinned, extra juicy greenhouse cucumbers grown without chemical runoff. Uniform shape and vibrant dark green skin.',
    specification: 'Individual length 20cm – 25cm, sorted into 15kg cartons',
    unit: 'Per 15kg Carton',
    estimatedPrice: '₦12,500',
    priceNumber: 12500,
    availability: 'In Harvest',
    image: '/images/vegetables-greenhouse.jpg',
    minimumOrder: '5 Cartons',
    nutritionalHighlight: '96% Hydration, Silica, Electrolytes'
  },
  {
    id: 'prod-seeds-maize',
    name: 'Certified Hybrid Maize Seeds (SAMMAZ High-Yield Series)',
    category: 'seeds',
    description: 'Bred for high grain weight, drought resilience, and strong standability. Pre-treated against seed-borne pathogens with certified 95%+ germination rate.',
    specification: 'Certified Grade, 50kg & 25kg multi-wall sealed bags with national certification tags',
    unit: 'Per 25kg Bag',
    estimatedPrice: '₦32,000',
    priceNumber: 32000,
    availability: 'Available Daily',
    image: '/images/improved-seeds.jpg',
    minimumOrder: '2 Bags (50kg)',
    nutritionalHighlight: 'Vigorous early germination, high protein & starch feed value, potential 6.5 MT/Ha yield'
  },
  {
    id: 'prod-cassava-stems',
    name: 'Improved High-Starch Cassava Cuttings (TME 419 & Pro-Vitamin A)',
    category: 'seeds',
    description: 'Certified disease-free cassava stem bundles sourced from high-tech multiplication farms. Immune to Cassava Mosaic Disease (CMD) with dense root tuberization.',
    specification: 'Freshly cut 1-meter mature stems, tied in 50-stem bundles with node protection',
    unit: 'Per Bundle (50 Stems)',
    estimatedPrice: '₦4,500',
    priceNumber: 4500,
    availability: 'Available Daily',
    image: '/images/crops-division.jpg',
    minimumOrder: '20 Bundles (1,000 Stems)',
    nutritionalHighlight: '32%+ Dry Matter Starch Content, Rapid Sprouting in 7-10 Days'
  },
  {
    id: 'prod-veg-seeds',
    name: 'F1 Hybrid Greenhouse Seeds (Bell Pepper, Tomato & Cucumber)',
    category: 'seeds',
    description: 'High-performance Dutch and tropicalized F1 hybrid seed varieties optimized for Nigerian greenhouse polyhouses and intensive drip fertigation.',
    specification: 'Hermetically foil-sealed tins/pouches of 1,000 or 5,000 seeds with batch purity certification',
    unit: 'Per Pack (1,000 Seeds)',
    estimatedPrice: '₦15,000',
    priceNumber: 15000,
    availability: 'Available Daily',
    image: '/images/improved-seeds.jpg',
    minimumOrder: '1 Pack',
    nutritionalHighlight: 'High Blossom-End Rot Resistance, Extended 9-Month Continuous Harvest Cycle'
  },
  {
    id: 'prod-day-old-chicks',
    name: 'Commercial Day-Old Chicks (DOC) - Broilers & Layers',
    category: 'chicks',
    description: 'Vigorous, uniform day-old chicks hatched in computer-controlled sterile incubation facilities from disease-free parent stock. Graded and vaccinated on day one.',
    specification: '50 chicks + 1 bonus per ventilated plastic transport crate, Marek’s & ND-IBV vaccinated',
    unit: 'Per Carton (51 Chicks)',
    estimatedPrice: '₦38,000',
    priceNumber: 38000,
    availability: 'Available Daily',
    image: '/images/day-old-chicks.jpg',
    minimumOrder: '2 Cartons (100 Chicks)',
    nutritionalHighlight: 'Top Tier Feed Conversion Ratio (1.65), 99%+ Transit Livability, High Early Weight Gain'
  },
  {
    id: 'prod-brooded-chicks',
    name: '2-Weeks Pre-Brooded Commercial Chicks (Broilers & Pullets)',
    category: 'chicks',
    description: 'Fully brooded past the vulnerable early mortality window. Kept in climate-managed warmth, trained on automatic pan feeders, and administered all initial vaccines.',
    specification: '2 weeks old, fully feathered wing coverts, 1st & 2nd Lasota and Gumboro (IBD) vaccinated with log',
    unit: 'Per Bird (2-Weeks Old)',
    estimatedPrice: '₦1,650',
    priceNumber: 1650,
    availability: 'Available Daily',
    image: '/images/poultry-division.jpg',
    minimumOrder: '50 Brooded Birds',
    nutritionalHighlight: 'Zero Brooding Mortality Risk for Farmers, Robust Immunity, Reaches Market Size 2 Weeks Faster'
  },
  {
    id: 'prod-farm-consultation',
    name: 'Agribusiness Setup & Farm Masterplanning Consultation',
    category: 'services',
    description: 'End-to-end commercial farm development advisory by senior agronomists and livestock engineers. We design biosecure poultry pens, high-tech greenhouses, automated drip lines, and closed-loop systems.',
    specification: 'Detailed feasibility study, CAD layout blueprints, technical bill of quantities (BOQ), and on-site implementation supervision',
    unit: 'Per Advisory Project',
    estimatedPrice: '₦350,000',
    priceNumber: 350000,
    availability: 'Available Daily',
    image: '/images/biotech-facility.jpg',
    minimumOrder: '1 Assessment Session',
    nutritionalHighlight: 'De-risks Capital Expenditure, Optimizes Space Efficiency & Accelerates ROI'
  },
  {
    id: 'prod-biosecurity-consultation',
    name: 'Poultry Health, Disease Prevention & Feed Optimization Audit',
    category: 'services',
    description: 'Comprehensive farm health audit conducted by registered veterinary pathologists. Includes water testing, biosecurity airlock evaluation, custom feed premix formulation, and mortality triage.',
    specification: 'Full farm audit report, customized biosecurity protocol checklist, and veterinary recommendation certification',
    unit: 'Per Farm Audit & Action Plan',
    estimatedPrice: '₦180,000',
    priceNumber: 180000,
    availability: 'Available Daily',
    image: '/images/biotech-facility.jpg',
    minimumOrder: '1 Diagnostic Audit',
    nutritionalHighlight: 'Cuts Farm Mortality, Prevents Disease Outbreaks, Enhances Layer Peak & FCR'
  }
];

export interface ShowroomExhibit {
  id: string;
  name: string;
  category: string;
  hall: string;
  headline: string;
  description: string;
  packagingDisplay: string;
  shelfLife: string;
  temperature: string;
  sensoryNotes: string;
  priceDisplay: string;
  priceNumber: number;
  image: string;
  specifications: string[];
  badge: string;
}

export const SHOWROOM_EXHIBITS: ShowroomExhibit[] = [
  {
    id: 'show-peppers',
    name: 'Greenhouse Bell Peppers (Tricolor Display)',
    category: 'Fresh Produce',
    hall: 'Fresh Harvest Hall',
    headline: 'Glasshouse Pristine Grade-A Capsicums',
    description: 'Displayed fresh in ventilated showroom display crates. Thick pericarp, glossy unblemished skin, and intense natural crunch harvested at sunrise daily.',
    packagingDisplay: '10kg Ventilated Showroom Crates & Retail Flow-Packs',
    shelfLife: '14-21 Days Chilled',
    temperature: '8°C - 10°C (Controlled Room)',
    sensoryNotes: 'Crisp, sweet, floral aroma with high natural moisture and zero chemical aftertaste.',
    priceDisplay: '₦18,500 / 10kg Crate',
    priceNumber: 18500,
    image: '/images/vegetables-greenhouse.jpg',
    specifications: ['Grade 1 Export Sorted', 'Zero Pesticide Residue', 'Drip-fertigated with organic compost tea'],
    badge: 'Harvest of the Day'
  },
  {
    id: 'show-eggs',
    name: 'Biosecure Table Eggs (Brown Grade-A)',
    category: 'Poultry & Hatchery',
    hall: 'Fresh Harvest Hall',
    headline: 'Candled & Laser-Inspected Egg Pyramids',
    description: 'Showcasing thick natural calcium shell integrity, deep marigold yolks, and clear albumens enriched through AgriNest’s farm-milled yellow maize diets.',
    packagingDisplay: 'Eco-Friendly Paper Pulp Trays (30 Eggs) & 12-Egg Retail Cartons',
    shelfLife: '30 Days Ambient / 60 Days Chilled',
    temperature: '15°C - 18°C Controlled Display',
    sensoryNotes: 'Deep golden yolk, rich velvety texture, high natural choline content.',
    priceDisplay: '₦4,800 / Crate (30 Eggs)',
    priceNumber: 4800,
    image: '/images/fresh-produce.jpg',
    specifications: ['NAFDAC Certified', 'Daily Automated Candling', 'Zero Antibiotic Residue'],
    badge: 'Showroom Best-Seller'
  },
  {
    id: 'show-seeds',
    name: 'Certified Hybrid Seed Exhibition Vault',
    category: 'Seeds & Genetics',
    hall: 'Genetics & Seed Bank',
    headline: 'High-Germination Drought-Resistant Seed Varieties',
    description: 'Inspect certified seed batches under optical magnification. Tested for 95%+ germination vigour, uniform kernel size, and pathogen barrier treatment.',
    packagingDisplay: 'Hermetically Sealed 1kg Tins, 10kg & 25kg Certified Sacks',
    shelfLife: '24 Months Hermetic Storage',
    temperature: 'Cool Dry Ambient (< 12% Moisture)',
    sensoryNotes: 'Uniform golden-orange kernels, pre-treated bio-protective coat, premium seed density.',
    priceDisplay: '₦32,000 / 25kg Certified Bag',
    priceNumber: 32000,
    image: '/images/improved-seeds.jpg',
    specifications: ['National Seed Council Standard', 'Treated against damping-off', 'High-yield hybrid genetics'],
    badge: 'Farmer Certified'
  },
  {
    id: 'show-chicks',
    name: 'Day-Old & 2-Weeks Brooded Chicks Pavilion',
    category: 'Poultry & Hatchery',
    hall: 'Poultry & Hatchery Wing',
    headline: 'Lively, Robust Broilers & High-Production Pullets',
    description: 'Observe active, chirping flocks in our hygienic showroom viewing pens equipped with infrared brooders. Fully vaccinated with recorded veterinary lineage.',
    packagingDisplay: 'Air-Ventilated Hatchery Delivery Crates (51 Birds/box)',
    shelfLife: 'Immediate Delivery / Same-Day Logistics',
    temperature: '32°C Brooding Micro-Climate',
    sensoryNotes: 'High alertness, robust navels, uniform golden down feathers, vigorous appetite.',
    priceDisplay: '₦38,000 / Carton (51 DOCs)',
    priceNumber: 38000,
    image: '/images/day-old-chicks.jpg',
    specifications: ['Marek’s & ND-IBV Day-1 Vaccinated', 'Superior Feed Conversion Ratio', '99.5% Livability Warranty'],
    badge: 'Hatchery Direct'
  },
  {
    id: 'show-tomatoes',
    name: 'Vine-Ripened Cluster Tomatoes',
    category: 'Fresh Produce',
    hall: 'Fresh Harvest Hall',
    headline: 'Deep Crimson, Naturally Sweetened Greenhouse Tomatoes',
    description: 'Suspended in fresh wooden display stands straight from the vine. Exceptionally firm walls that hold slice shape with sweet, acidic balance.',
    packagingDisplay: '25kg Wooden Field Crates & 5kg Gourmet Hospitality Boxes',
    shelfLife: '10-14 Days Controlled Ambient',
    temperature: '12°C - 14°C',
    sensoryNotes: 'Rich tomato aroma, juicy seed gel, high natural lycopene richness.',
    priceDisplay: '₦22,000 / 25kg Crate',
    priceNumber: 22000,
    image: '/images/fresh-produce.jpg',
    specifications: ['Zero Post-Harvest Chemical Dips', 'Cluster Vine Harvested', 'Uniform Sizing (60-80mm)'],
    badge: 'Chef Choice'
  },
  {
    id: 'show-consultation',
    name: 'Agri-Tech Consultation & Advisory Suite',
    category: 'Services & Advisory',
    hall: 'Consultation & Advisory Suite',
    headline: 'One-on-One Agronomy & Livestock Farm Engineering',
    description: 'Meet our senior farm directors and agronomists in the private showroom boardroom to inspect farm CAD designs, financial spreadsheets, and biosecurity plans.',
    packagingDisplay: 'Full Comprehensive Project Dossier & CAD Blueprint Package',
    shelfLife: 'Lifetime Strategic Agribusiness Value',
    temperature: 'Air-Conditioned VIP Conference Room',
    sensoryNotes: 'Actionable data-driven insights, soil test analyses, and turnkey farm setup guidance.',
    priceDisplay: '₦350,000 / Advisory Project',
    priceNumber: 350000,
    image: '/images/biotech-facility.jpg',
    specifications: ['Chartered Agronomists & Animal Scientists', 'Site Feasibility Verification', 'Turnkey Construction Oversight'],
    badge: 'Expert Advisory'
  }
];

export const CORRIDOR_ADVANTAGES = [
  {
    title: '35 Mins to Lagos Gateway',
    subtitle: 'Berger / Ojodu / Ikeja Access',
    desc: 'Bypasses internal Lagos gridlock. Early morning harvest reaches supermarkets and retail hubs in Lagos before 8:00 AM.'
  },
  {
    title: 'Direct Link to Sagamu Interchange',
    subtitle: 'Gateway to Eastern & Western Nigeria',
    desc: 'Uninhibited arterial connectivity for nationwide haulage, industrial feed suppliers, and agro-allied processors.'
  },
  {
    title: 'Plot 1-6 Freedom Way Infrastructure',
    subtitle: 'Dedicated Agro-Industrial Zone',
    desc: 'Heavy-duty 40ft container turning radii, dedicated transformer power substation, clean borehole aquifer, and 24/7 security perimeter.'
  },
  {
    title: 'Same-Day Cold Chain Dispatch',
    subtitle: 'Preserved Peak Freshness',
    desc: 'Chilled delivery vans depart multiple times daily to maintain international food safety temperature benchmarks.'
  }
];

export const CIRCULAR_STEPS = [
  {
    step: '01',
    title: 'Precision Crops & Greenhouses',
    desc: 'High-yield maize, grains, and greenhouse vegetables receive solar-driven drip irrigation and bio-nutrients.'
  },
  {
    step: '02',
    title: 'Nutritious Feed Formulation',
    desc: 'Harvested maize, soya, and nutritious crop residues are formulated on-site into feed for poultry and livestock.'
  },
  {
    step: '03',
    title: 'Thriving Poultry & Livestock',
    desc: 'Animals thrive in clean, temperature-managed biosecure pens, producing fresh eggs, poultry meat, and beef.'
  },
  {
    step: '04',
    title: 'Bio-Digestion & Composting',
    desc: 'Poultry litter and livestock manure are processed in our aerobic composting yard into rich organic bio-fertilizer.'
  },
  {
    step: '05',
    title: 'Soil Regeneration & Zero Waste',
    desc: 'Organic bio-fertilizer returns to the fields, eliminating toxic runoff and generating rich, living soils for the next cycle.'
  }
];

export const FAQS = [
  {
    q: 'Can corporate clients and supermarkets place scheduled recurring contracts?',
    a: 'Yes. AgriNest Integrated Farms specializes in structured off-take agreements for supermarket chains, food processors, corporate caterers, and hotel groups with guaranteed weekly quotas, predictable volume pricing, and cold-chain delivery.'
  },
  {
    q: 'Where is the farm located and how accessible is it for haulage trucks?',
    a: 'We are situated at Plot 1-6 Freedom Way, Lagos-Ibadan Expressway, Nigeria. The site features paved access roads engineered specifically for 30-ton multi-axle articulated trucks, automated weighbridge facilities, and dedicated loading docks.'
  },
  {
    q: 'Are visits and physical inspections allowed?',
    a: 'Yes. We welcome corporate procurement teams, agricultural investors, and institutional buyers by prior appointment. All visitors must adhere to our biosecurity sanitation protocols (footbaths and protective footwear) to protect animal and crop health.'
  },
  {
    q: 'What biosecurity standards are enforced at AgriNest?',
    a: 'Our poultry and livestock housing adheres to international biosecurity standards: strict perimeter fencing, automated vehicle disinfection dips at the gate, controlled visitor access, all-in/all-out housing cycles, and regular veterinary laboratory screenings.'
  }
];
