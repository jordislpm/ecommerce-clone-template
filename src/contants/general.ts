import { MyStoreInfoType, SlideType } from "../types";

export const myStoreInfo: MyStoreInfoType = {
    title: "Oli Store",
    description: "Encuentra la mejor ropa para niños con estilo, comodidad y calidad. En nuestra tienda infantil te ofrecemos ropa para bebés, niños y niñas de 0 a 12 años, con diseños modernos, divertidos y duraderos. ¡Viste a tus hijos con lo mejor al mejor precio!",
    address: "Calle El Carmen, Local de Nancy la decoradora, Frente a Pica Pollo Charlie, Las Terrenas, Samana, R.D.",
    email: "info@olistore.com",
    phone: "+1 829 268 2437",
    socialMedia:{
      instagram:"https://www.instagram.com/tu_oli_store?igsh=MWVqYjRlazludjRreg==",
      facebook:"https://www.facebook.com/share/1HnMGwucYP/?mibextid=wwXIfr",
      youtube:null,
      pinterest:null,
      x:null
    }
}




export const slidesData: SlideType[] = [
  {
    id: 1,
    title: "Summer Fun for Kids",
    description: "Cool outfits up to 50% off! ☀️👕🩳",
    img: "https://images.pexels.com/photos/32859436/pexels-photo-32859436.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-100 to-pink-100",
  },
  {
    id: 2,
    title: "Warm & Cozy for Winter",
    description: "Bundle up! Save up to 50% on winter styles ❄️🧤🧣",
    img: "https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-100 to-purple-100",
  },
  {
    id: 3,
    title: "Fresh Spring Looks",
    description: "New arrivals blooming! 🌸 Get up to 50% off",
    img: "https://images.pexels.com/photos/7850510/pexels-photo-7850510.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-green-100 to-pink-100",
  },
];