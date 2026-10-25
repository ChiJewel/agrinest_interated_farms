export interface FarmContactConfig {
  brandName: string;
  tagline: string;
  subTagline: string;
  address: string;
  corridor: string;
  state: string;
  country: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  workingHours: string;
  corporateRegistration: string;
  facilitySize: string;
}

export const farmConfig: FarmContactConfig = {
  brandName: "AgriNest Integrated Farms",
  tagline: "Healthy Crops. Thriving Animals. A Sustainable Tomorrow.",
  subTagline: "International Standard Biotech Agriculture & Sustainable Farming in Nigeria",
  address: "Plot 1-6 Freedom Way",
  corridor: "Lagos-Ibadan Expressway Corridor",
  state: "Ogun / Lagos Agro-Industrial Zone",
  country: "Nigeria",
  phoneDisplay: "+234 817 422 2244",
  phoneRaw: "+2348174222244",
  whatsappNumber: "2348174222244",
  whatsappDisplay: "+234 817 422 2244",
  email: "enquiries@agrinestfarms.com",
  workingHours: "Monday – Saturday: 7:00 AM – 6:00 PM (WAT)",
  corporateRegistration: "RC: AGR-NG-2024-INTL",
  facilitySize: "Multi-Hectare Integrated Biotech Agricultural Complex"
};

/**
 * Generates a clean, URI-encoded WhatsApp link with a custom contextual message.
 */
export const getWhatsAppLink = (customMessage?: string): string => {
  const number = farmConfig.whatsappNumber;
  const defaultText = "Hello AgriNest Integrated Farms, I would like to enquire about your available farm produce, livestock, and corporate supply options.";
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${number}?text=${text}`;
};

