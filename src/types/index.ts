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
  option: string;
  value: string;
  price?: {
    price: number;
    discountedPrice?: number;
  };
  stock?: {
    quantity: number;
    inStock?: true
  };
  //change this later
  choices: any
};

export type  ProductOptionProductItem = {
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
