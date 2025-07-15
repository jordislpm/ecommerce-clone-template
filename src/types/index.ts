import { collections } from "@wix/stores";
import { MODE } from "../enums/auth-mode.enum";
export type SlideType = {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
};

export type ProductItem = {
  _id?: string;
  slug?: string;
  name: string;
  description?: string;
  price?: {
    price: number;
    discountedPrice?: number;
  };
  stock?: {
    quantity: number;
  };
  media?: {
    mainMedia?: {
      image?: {
        url: string;
      };
    };
    items?: Array<{
      image?: {
        url: string;
      };
    }>;
  };
  additionalInfoSections?: Array<{
    title: string;
    description: string;
  }>;
  variants?: VariantProductItem[];
  productOptions?: ProductOptionProductItem[];
};

export type VariantProductItem = {
  _id: string;
  option?: string; // Sometimes not provided by Wix
  value?: string; // Sometimes not provided by Wix
  price?: {
    price: number;
    discountedPrice?: number;
  };
  stock?: {
    quantity: number;
    trackQuantity?: boolean;
    inStock: boolean;
  };
  variant?: {
    priceData?: {
      price: number;
      discountedPrice: number;
      currency?: string;
    };
    convertedPriceData?: {
      price: number;
      discountedPrice: number;
      currency?: string;
    };
    weight?: number;
    sku?: string;
    visible?: boolean;
  };
  choices: Record<string, string>; // example: { "Color": "Red", "Size": "Large" }
};

export type ProductOptionProductItem = {
  name: string;
  choices: Array<{
    description: string;
    value: string;
  }>;
};

export type CollectionItem = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  numberOfProducts?: number;
  media?: {
    mainMedia?: {
      image?: {
        url: string;
      };
    };
  };
};

export type MyStoreInfoType = {
  title: string;
  description: string;
  address: string;
  email: string;
  phone: string;
  socialMedia: {
    instagram: null | string;
    facebook: null | string;
    youtube: null | string;
    pinterest: null | string;
    x: null | string;
  };
};

export type PaginationType = {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
};

/// AUTH

// Shared base
export type BaseAuthDTO = {
  email: string;
  password?: string;
}

// LOGIN
export interface LoginDTO extends BaseAuthDTO {
  mode: MODE.LOGIN;
}

// REGISTER
export interface RegisterDTO extends BaseAuthDTO {
  mode: MODE.REGISTER;
  username: string;
}

// RESET PASSWORD
export interface ResetPasswordDTO {
  mode: MODE.RESET_PASSWORD;
  email: string;
}

// EMAIL VERIFICATION
export interface EmailVerificationDTO {
  mode: MODE.EMAIL_VERIFICATION;
  emailCode: string;
}

export type AuthDTO =
  | LoginDTO
  | RegisterDTO
  | ResetPasswordDTO
  | EmailVerificationDTO;

/// GLOBAL CONTEXT

export type SelectVariantGlobalType = {
  selectedVariant: undefined | VariantProductItem;
  setSelectedVariant: (newVariant: VariantProductItem) => void;
};

export type CollectionStoreType = {
  collections: CollectionItem[] | null;
  setCollections: (newCollections: CollectionItem[]) => void;
};

export interface AuthState {
  isLoggedIn: boolean;
  loading: boolean;
  setIsLoggedIn: (value: boolean) => void;
  setLoading: (value: boolean) => void;
}
