export class ProductModel {
  constructor(
    public id: number = 0,
    public title: string = "",
    public price: number = 0,
    public likes: number = 0,
    public rating: number = 0,
    public imageUrl: string = "",
    public description: string = "",
    public offer?: any,
  ) {}
}

type ProductsDataType = {
  products: ProductModel[];
};
export let productsData: ProductsDataType = {
  products: [
    {
      id: 1,
      title: "Macbook Pro",
      price: 250000,
      rating: 5,
      likes: 200,
      offer: {
        discount: "10%",
      },
      imageUrl:
        "https://photos5.appleinsider.com/gallery/45240-88149-The-new-MacBook-Pro-16-inch-xl.jpg",
      description:
        "MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.",
    },
    {
      id: 2,
      title: "Nikon 7200",
      price: 200000,
      rating: 4,
      likes: 500,
      imageUrl:
        "https://i0.wp.com/dailylearn.com/wp-content/uploads/2023/01/How-to-Shoot-Video-on-Your-Nikon-d7200.jpg",
      description:
        "MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.",
    },
    {
      id: 3,
      title: "Nikon Alucon",
      price: 20000,
      rating: 5,
      likes: 300,
      imageUrl: "https://cdn.mos.cms.futurecdn.net/Eio3uWyghbtMGVDzXBWn8T.jpg",
      description:
        "MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.",
    },
    {
      id: 4,
      title: "DJI Mavic Pro ",
      price: 300000,
      rating: 4,
      likes: 800,
      imageUrl:
        "https://i.pcmag.com/imagery/reviews/06N6X13HBTsCmSsZE18mhOC-16..v1569473679.jpg",
      description:
        "MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.",
    },
    {
      id: 5,
      title: "Nikon 200-500 ",
      price: 300000,
      rating: 4,
      likes: 800,
      imageUrl:
        "https://www.camocoat.in/wp-content/uploads/2018/09/200-500-mm-f5.6E-ED-VR-for-AF-S-NIKKOR-MWG-H-scaled.jpg",
      description:
        "MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.",
    },
    {
      id: 6,
      title: "Nikon 7500",
      price: 400000,
      rating: 4,
      likes: 800,
      imageUrl:
        "https://www.camocoat.in/wp-content/uploads/2018/09/200-500-mm-f5.6E-ED-VR-for-AF-S-NIKKOR-MWG-H-scaled.jpg",
      description:
        "MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.",
    },
    {
      id: 10,
      title: "iPods",
      price: 10000,
      likes: 200,
      rating: 4,
      imageUrl:
        "https://i.insider.com/627ba06fdd983300191c8b6f?width=1200&format=jpeg",
      description:
        "Buy Apple iPods at India's Best Online Shopping Store. Choose from a wide range of ipods for the best music experience. ✓Best Deals ✓COD.",
    },
  ],
};
