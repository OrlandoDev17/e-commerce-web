interface shoe {
  id: number;
  name: string;
  price: number;
  maker: string;
  images: string[];
}

export const featuredShoes: shoe[] = [
  {
    id: 1,
    name: 'Air Jordan 1 Retro Low OG SP Travis Scott Medium Olive',
    price: 700,
    maker: 'Nike',
    images: [
      'https://ciconceptstore.com/cdn/shop/files/Jordan1RetroLowOGSP_TravisScottMediumOlive.png?v=1726833258&width=700',
      'https://ciconceptstore.com/cdn/shop/files/0001_AIR-JORDAN-1-RETRO-LOW-OG-SP-TRAVIS-SCOTT-MEDIUM-OLIVE.png?v=1726833258&width=700',
    ],
  },
  {
    id: 2,
    name: 'Adidas Campus x Bad Bunny - The Last Campus',
    price: 230,
    maker: 'Adidas',
    images: [
      'https://ciconceptstore.com/cdn/shop/files/Adidas_Campus_x_Bad-Bunny_The_Last_Campus1.webp?v=1719060145&width=800',
      'https://ciconceptstore.com/cdn/shop/files/Adidas_Campus_x_Bad-Bunny_The_Last_Campus2.webp?v=1719060145&width=800',
      'https://ciconceptstore.com/cdn/shop/files/Copia-de-Diseno-sin-titulo-_1.webp?v=1719060419&width=800',
    ],
  },
  {
    id: 3,
    name: 'Air Jordan 4 Retro White Thunder',
    price: 250,
    maker: 'Nike',
    images: [
      'https://ciconceptstore.com/cdn/shop/files/airjordan4thunder_1.png?v=1724682313&width=700',
      'https://ciconceptstore.com/cdn/shop/files/airjordan4thunder_2.png?v=1724682313&width=700',
    ],
  },
  {
    id: 4,
    name: 'Nike Dunk Low - Cacao Wow (W)',
    price: 170,
    maker: 'Nike',
    images: [
      'https://ciconceptstore.com/cdn/shop/files/Nike_Dunk_Low_Cacao_Wow1.webp?v=1719583040&width=800',
      'https://ciconceptstore.com/cdn/shop/files/Nike_Dunk_Low_Cacao_Wow2.webp?v=1719583040&width=800',
      'https://ciconceptstore.com/cdn/shop/files/Nike_Dunk_Low_Cacao_Wow3.webp?v=1719583040&width=800',
    ],
  },
  {
    id: 5,
    name: 'Nike SB Dunk Low - Travis Scott',
    price: 2300,
    maker: 'Nike',
    images: [
      'https://ciconceptstore.com/cdn/shop/products/NikeSBDunkLow-TravisScott.png?v=1676123644&width=800',
      'https://ciconceptstore.com/cdn/shop/products/4_19.png?v=1676123644&width=800',
      'https://ciconceptstore.com/cdn/shop/products/3_19.png?v=1676123644&width=800',
    ],
  },
  {
    id: 6,
    name: 'Adidas Campus 00s Core Black',
    price: 170,
    maker: 'Adidas',
    images: [
      'https://ciconceptstore.com/cdn/shop/products/adidas-campus-00s-core-black-1_2000x_f891c99f-d7be-41e6-aa92-9000abde32d0.png?v=1697471906&width=700',
      'https://ciconceptstore.com/cdn/shop/files/Adidas_Campus_00s_Core_Black2.webp?v=1719054227&width=800',
      'https://ciconceptstore.com/cdn/shop/files/Adidas_Campus_00s_Core_Black3.webp?v=1719054227&width=800',
    ],
  },
];
