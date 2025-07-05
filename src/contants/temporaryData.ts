import { CategoryItem, ProductItem } from "../types";

export const exampleProducts: ProductItem[] = [
  {
    _id: "1",
    slug: "hurley-soft-coral-tshirt",
    name: "Hurley Boys' Soft Cloud Slub T-Shirt – Faded Coral",
    price: { price: 18.99 },
    media: {
      mainMedia: {
        image: { url: "/fakeClothes/boy_tshirt.jpg" },
      },
      items: [
        { image: { url: "/fakeClothes/boy_tshirt-2.jpg" } },
        { image: { url: "/fakeClothes/boy_tshirt-1.jpg" } },
      ],
    },
    additionalInfoSections: [
      {
        title: "shortDesc",
        description:
          "Hurley boys' soft cloud slub t-shirt in Faded Coral. Lightweight, stylish, and made for everyday comfort.",
      },
    ],
  },
  {
    _id: "2",
    slug: "boys-multicolor-tshirt-set",
    name: "Boys' 4-Pack T-Shirt Set – Multicolor",
    price: { price: 32.5 },
    media: {
      mainMedia: {
        image: { url: "/fakeClothes/boy-tshirts.jpg" },
      },
      items: [
        { image: { url: "/fakeClothes/boy-tshirts1.jpg" } },
        { image: { url: "/fakeClothes/boy-tshirts1.jpg" } },
      ],
    },
    additionalInfoSections: [
      {
        title: "shortDesc",
        description:
          "Pack of 4 soft t-shirts for boys in assorted colors. Ideal for everyday wear with a comfortable fit and easy pairing.",
      },
    ],
  },
  {
    _id: "3",
    slug: "boys-long-sleeve-shirt-set",
    name: "Boys' 4-Pack Long Sleeve Shirts – Multicolor",
    price: { price: 27.0 },
    media: {
      mainMedia: {
        image: { url: "/fakeClothes/2boy-tshirts.jpg" },
      },
      items: [
        { image: { url: "/fakeClothes/2boy-tshirts-2.jpg" } },
        { image: { url: "/fakeClothes/2boy-tshirts-2.jpg" } },
      ],
    },
    additionalInfoSections: [
      {
        title: "shortDesc",
        description:
          "Set of 4 long sleeve shirts for boys in different colors. Great for layering or wearing alone during cooler seasons.",
      },
    ],
  },
  {
    _id: "4",
    slug: "purple-girl-outfit",
    name: "Purple Girl Outfit",
    price: { price: 38.99 },
    media: {
      mainMedia: {
        image: { url: "/fakeClothes/girl-purple.jpg" },
      },
      items: [
        { image: { url: "/fakeClothes/girl-purple-1.jpg" } },
        { image: { url: "/fakeClothes/girl-purple-2.jpg" } },
      ],
    },
    additionalInfoSections: [
      {
        title: "shortDesc",
        description:
          "Charming purple outfit for girls, combining comfort with playful style.",
      },
    ],
  },
  {
    _id: "5",
    slug: "stitch-costume-set",
    name: "Stitch Costume Set",
    price: { price: 42.0 },
    media: {
      mainMedia: {
        image: { url: "/fakeClothes/girl-stitch-outfit.jpg" },
      },
      items: [
        { image: { url: "/fakeClothes/girl-stitch-outfit-1.jpg" } },
        { image: { url: "/fakeClothes/girl-stitch-outfit-2.jpg" } },
      ],
    },
    additionalInfoSections: [
      {
        title: "shortDesc",
        description:
          "Adorable Stitch-themed outfit perfect for dress-up and themed parties.",
      },
    ],
  },
  {
    _id: "6",
    slug: "dino-beach-outfit",
    name: "Dino Beach Outfit",
    price: { price: 36.5 },
    media: {
      mainMedia: {
        image: { url: "/fakeClothes/boy-blue-dino-beach-outfit.jpg" },
      },
      items: [
        { image: { url: "/fakeClothes/boy-blue-dino-beach-outfit-1.jpg" } },
        { image: { url: "/fakeClothes/boy-blue-dino-beach-outfit-2.jpg" } },
        { image: { url: "/fakeClothes/boy-blue-dino-beach-outfit-3.jpg" } },
      ],
    },
    additionalInfoSections: [
      {
        title: "shortDesc",
        description:
          "Cool and breathable dino print beach outfit. Perfect for summer days at the shore.",
      },
    ],
  },
  {
    _id: "7",
    slug: "baby-bodysuit-pack",
    name: "Unisex Baby Bodysuit (6-Pack)",
    price: { price: 28.99 },
    media: {
      mainMedia: {
        image: { url: "/fakeClothes/unisex-baby-6-piece-Bodysuits.jpg" },
      },
      items: [
        { image: { url: "/fakeClothes/unisex-baby-6-piece-Bodysuits-1.jpg" } },
        { image: { url: "/fakeClothes/unisex-baby-6-piece-Bodysuits-2.jpg" } },
        { image: { url: "/fakeClothes/unisex-baby-6-piece-Bodysuits-3.jpg" } },
      ],
    },
    additionalInfoSections: [
      {
        title: "shortDesc",
        description:
          "Soft cotton 6-piece bodysuit set. Great value and everyday comfort for babies.",
      },
    ],
  },
  {
    _id: "8",
    slug: "infant-girl-long-sleeve-set",
    name: "Infant Girl Long Sleeve Set",
    price: { price: 33.75 },
    media: {
      mainMedia: {
        image: { url: "/fakeClothes/Infant-Girl-Outfits-Long-Sleeve.jpg" },
      },
      items: [
        {
          image: { url: "/fakeClothes/Infant-Girl-Outfits-Long-Sleeve-1.jpg" },
        },
        {
          image: { url: "/fakeClothes/Infant-Girl-Outfits-Long-Sleeve-2.jpg" },
        },
      ],
    },
    additionalInfoSections: [
      {
        title: "shortDesc",
        description:
          "Cozy long sleeve clothing set for infant girls. Designed for warmth and cuteness.",
      },
    ],
  },
];

export const kidsClothingCategories: CategoryItem[] = [
  {
    _id: "1",
    name: "T-Shirts",
    slug: "t-shirts",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/29215113/pexels-photo-29215113.jpeg",
        },
      },
    },
  },
  {
    _id: "2",
    name: "Shirts & Blouses",
    slug: "shirts-blouses",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/10044938/pexels-photo-10044938.jpeg",
        },
      },
    },
  },
  {
    _id: "3",
    name: "Pants & Jeans",
    slug: "pants-jeans",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/262103/pexels-photo-262103.jpeg",
        },
      },
    },
  },
  {
    _id: "4",
    name: "Shorts",
    slug: "shorts",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/7863074/pexels-photo-7863074.jpeg",
        },
      },
    },
  },
  {
    _id: "5",
    name: "Dresses",
    slug: "dresses",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/9532759/pexels-photo-9532759.jpeg",
        },
      },
    },
  },
  {
    _id: "6",
    name: "Skirts",
    slug: "skirts",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/7140713/pexels-photo-7140713.jpeg",
        },
      },
    },
  },
  {
    _id: "7",
    name: "Hoodies & Sweatshirts",
    slug: "hoodies-sweatshirts",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/10856464/pexels-photo-10856464.jpeg",
        },
      },
    },
  },
  {
    _id: "8",
    name: "Jackets & Coats",
    slug: "jackets-coats",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/17357193/pexels-photo-17357193.jpeg",
        },
      },
    },
  },
  {
    _id: "9",
    name: "Pajamas & Loungewear",
    slug: "pajamas-loungewear",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/8506373/pexels-photo-8506373.jpeg",
        },
      },
    },
  },
  {
    _id: "10",
    name: "Matching Sets",
    slug: "matching-sets",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/16949205/pexels-photo-16949205.jpeg",
        },
      },
    },
  },
  {
    _id: "11",
    name: "Overalls & Jumpsuits",
    slug: "overalls-jumpsuits",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/5561158/pexels-photo-5561158.jpeg",
        },
      },
    },
  },
  {
    _id: "12",
    name: "Swimwear",
    slug: "swimwear",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/7863540/pexels-photo-7863540.jpeg",
        },
      },
    },
  },
  {
    _id: "13",
    name: "School Uniforms",
    slug: "school-uniforms",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/10638092/pexels-photo-10638092.jpeg",
        },
      },
    },
  },
];
