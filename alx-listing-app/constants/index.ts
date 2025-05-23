// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// UI Text Constants
export const UI_TEXT = {
  APP_TITLE: 'ALX Listing App',
  APP_DESCRIPTION: 'Find and book amazing places to stay',
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
  LOADING: 'Loading...',
  ERROR_MESSAGE: 'Something went wrong. Please try again.',
} as const;

// App Configuration
export const APP_CONFIG = {
  ITEMS_PER_PAGE: 12,
  MAX_RATING: 5,
  DEFAULT_CURRENCY: '$',
} as const;

// Asset Paths
export const ASSETS = {
  PLACEHOLDER_IMAGE: '/assets/images/placeholder.jpg',
  LOGO: '/assets/images/logo.svg',
} as const;

// Styling Constants
export const BUTTON_VARIANTS = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700',
} as const;

export const BUTTON_SIZES = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
} as const;