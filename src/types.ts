export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  iconName: "Car" | "CarFront" | "Shield" | "Sparkles" | "Layers";
  features: string[];
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  vehicle: string;
  avatarUrl?: string;
  isVerified: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Paint Correction" | "Ceramic Coating" | "Interior Restoration" | "Full Detail";
  imageUrl: string;
  description: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export interface BookingSubmission {
  fullName: string;
  phone: string;
  email: string;
  vehicleType: string;
  serviceType: string;
  preferredDate: string;
  additionalNotes?: string;
}
