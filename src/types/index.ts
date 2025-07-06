export type SlideType = {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
};

export type ProductItem = {
  _id: string;
  slug: string;
  name: string;
  price?: {
    price: number;
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
};

export type CategoryItem = {
  _id: string;
  name: string;
  slug: string;
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
