export type SlideType = {
    id: number;
    title: string;
    description: string;
    img: string;
    url:string;
    bg: string;
}

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