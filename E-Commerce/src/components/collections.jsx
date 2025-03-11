import React, { useState } from "react";

function Collections() {
  // Define the item arrays first
  const ringsCollection = [
    {
      id: 1,
      name: "Eternal Diamond Ring",
      image: "/collections/rings/ring1.webp",
    },
    {
      id: 2,
      name: "Rose Gold Halo Ring",
      image: "/collections/rings/ring2.jpg",
    },
    {
      id: 3,
      name: "Classic Solitaire Ring",
      image: "/collections/rings/ring3.webp",
    },
    {
      id: 4,
      name: "Vintage Sapphire Ring",
      image: "/collections/rings/ring4.webp",
    },
    {
      id: 5,
      name: "Platinum Band Ring",
      image: "/collections/rings/ring5.webp",
    },
    {
      id: 6,
      name: "Art Deco Emerald Ring",
      image: "/collections/rings/ring6.jpeg",
    },
    {
      id: 7,
      name: "Infinity Twist Ring",
      image: "/collections/rings/ring7.webp",
    },
    {
      id: 8,
      name: "Pearl Accent Ring",
      image: "/collections/rings/ring8.webp",
    },
    {
      id: 9,
      name: "Modern Marquise Ring",
      image: "/collections/rings/ring9.webp",
    },
  ];

  const earringsCollection = [
    {
      id: 1,
      name: "Diamond Stud Earrings",
      image: "/collections/earrings/earring1.jpg",
    },
    {
      id: 2,
      name: "Gold Hoop Earrings",
      image: "/collections/earrings/earring2.jpg",
    },
    {
      id: 3,
      name: "Pearl Drop Earrings",
      image: "/collections/earrings/earring3.jpg",
    },
    {
      id: 4,
      name: "Silver Chandelier Earrings",
      image: "/collections/earrings/earring4.jpg",
    },
    {
      id: 5,
      name: "Rose Gold Huggie Earrings",
      image: "/collections/earrings/earring5.jpg",
    },
    {
      id: 6,
      name: "Crystal Teardrop Earrings",
      image: "/collections/earrings/earring6.jpg",
    },
    {
      id: 7,
      name: "Minimalist Bar Earrings",
      image: "/collections/earrings/earring7.jpg",
    },
    {
      id: 8,
      name: "Gemstone Cluster Earrings",
      image: "/collections/earrings/earring8.jpg",
    },
    {
      id: 9,
      name: "Artisan Threader Earrings",
      image: "/collections/earrings/earring9.jpg",
    },
  ];

  const necklace = [
    {
      id: 1,
      name: "Diamond Pendant Necklace",
      image: "/collections/necklace/necklace1.jpg",
    },
    {
      id: 2,
      name: "Gold Chain Necklace",
      image: "/collections/necklace/necklace2.jpg",
    },
    {
      id: 3,
      name: "Pearl Strand Necklace",
      image: "/collections/necklace/necklace3.jpg",
    },
    {
      id: 4,
      name: "Silver Locket Necklace",
      image: "/collections/necklace/necklace4.jpg",
    },
    {
      id: 5,
      name: "Gemstone Choker Necklace",
      image: "/collections/necklace/necklace5.jpg",
    },
    {
      id: 6,
      name: "Layered Beaded Necklace",
      image: "/collections/necklace/necklace6.jpg",
    },
    {
      id: 7,
      name: "Modern Pave Necklace",
      image: "/collections/necklace/necklace7.jpg",
    },
    {
      id: 8,
      name: "Vintage Cameo Necklace",
      image: "/collections/necklace/necklace8.jpg",
    },
    {
      id: 9,
      name: "Statement Crystal Necklace",
      image: "/collections/necklace/necklace9.jpg",
    },
  ];

  const bracelets = [
    {
      id: 1,
      name: "Diamond Tennis Bracelet",
      image: "/collections/bracelets/bracelet1.jpg",
    },
    {
      id: 2,
      name: "Gold Bangle Bracelet",
      image: "/collections/bracelets/bracelet2.jpg",
    },
    {
      id: 3,
      name: "Pearl Charm Bracelet",
      image: "/collections/bracelets/bracelet3.jpg",
    },
    {
      id: 4,
      name: "Silver Cuff Bracelet",
      image: "/collections/bracelets/bracelet4.jpg",
    },
    {
      id: 5,
      name: "Rose Gold Chain Bracelet",
      image: "/collections/bracelets/bracelet5.jpg",
    },
    {
      id: 6,
      name: "Gemstone Beaded Bracelet",
      image: "/collections/bracelets/bracelet6.jpg",
    },
    {
      id: 7,
      name: "Leather Wrap Bracelet",
      image: "/collections/bracelets/bracelet7.jpg",
    },
    {
      id: 8,
      name: "Artisan Hammered Bracelet",
      image: "/collections/bracelets/bracelet8.jpg",
    },
    {
      id: 9,
      name: "Modern Link Bracelet",
      image: "/collections/bracelets/bracelet9.jpg",
    },
  ];

  const watches = [
    {
      id: 1,
      name: "Luxury Chronograph Watch",
      image: "/collections/watches/watch1.jpg",
    },
    {
      id: 2,
      name: "Classic Leather Strap Watch",
      image: "/collections/watches/watch2.jpg",
    },
    {
      id: 3,
      name: "Rose Gold Minimalist Watch",
      image: "/collections/watches/watch3.jpg",
    },
    {
      id: 4,
      name: "Diamond Accent Watch",
      image: "/collections/watches/watch4.jpg",
    },
    {
      id: 5,
      name: "Sport Smartwatch",
      image: "/collections/watches/watch5.jpg",
    },
    {
      id: 6,
      name: "Vintage Mechanical Watch",
      image: "/collections/watches/watch6.jpg",
    },
    {
      id: 7,
      name: "Skeleton Dial Watch",
      image: "/collections/watches/watch7.jpg",
    },
    {
      id: 8,
      name: "Ceramic Bezel Watch",
      image: "/collections/watches/watch8.jpg",
    },
    {
      id: 9,
      name: "Moonphase Watch",
      image: "/collections/watches/watch9.jpg",
    },
  ];

  const [selectedCollection, setSelectedCollection] = useState(null);

  const collections = [
    {
      id: 1,
      name: "Rings",
      image: "/collections/rings.jpg",
      items: ringsCollection,
    },
    {
      id: 2,
      name: "Necklaces",
      image: "/collections/necklaces.jpg",
      items: necklace,
    },
    {
      id: 3,
      name: "Earrings",
      image: "/collections/earrings.jpg",
      items: earringsCollection,
    },
    {
      id: 4,
      name: "Bracelets",
      image: "/collections/bracelets.jpg",
      items: bracelets,
    },
    {
      id: 5,
      name: "Watches",
      image: "/collections/watches.jpg",
      items: watches,
    },
  ];

  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection);
  };

  const getRandomRating = () => {
    let rating = Math.random();

    if (rating < 0.7) {
      return (Math.random() * 1 + 4).toFixed(1);
    } else if (rating >= 0.7 && rating < 0.9) {
      return (Math.random() * 0.5 + 3.5).toFixed(1);
    } else {
      return (Math.random() * 0.5 + 3).toFixed(1);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-8 rounded-2xl mb-4">
      <div className="relative w-full sm:w-[94%] md:w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="relative group cursor-pointer"
              onClick={() => handleCollectionClick(collection)}
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-black bg-gray-200 flex items-center justify-center transition-all duration-300 transform group-hover:scale-125 shadow-lg"
                style={{
                  backgroundImage: `url(${collection.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <p className="text-center mt-2 text-gray-700 font-semibold text-sm md:text-base">
                {collection.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 px-6 mx-[-32px]">
        {selectedCollection ? (
          <div className="max-w-7xl mx-auto">
            {/* Parent Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.80fr_1fr] gap-3">
              {/* First 2x2 Grid (4 smaller cards) */}
              <div className="grid grid-cols-2 gap-1">
                {selectedCollection.items.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                    className="p-1 rounded-lg shadow-lg shadow-[#00000065]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <h3 className="text-base font-semibold text-gray-800 ml-3 mt-1">
                      {item.name}
                    </h3>
                    <div className="flex justify-between my-1 mr-2">
                      <p className="text-gray-600 mx-3">$499.99</p>
                      <div className="flex items-center mx-3">
                        <span className="text-yellow-400">★</span>
                        <span className="text-black ml-1">
                          {getRandomRating()}
                        </span>
                      </div>
                    </div>
                    <button className="mt-0 mx-3 bg-[#d35252] text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>

              {/* 5th Card (Middle Card) */}
              {selectedCollection.items.map((item, index) =>
                index === 4 ? (
                  <div
                    key={item.id}
                    className="shadow-lg shadow-[#00000065] p-6 rounded-lg h-[70vh] lg:h-full relative"
                  >
                    <div
                      className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full rounded-lg">
                      <h3 className="text-2xl font-bold text-white">
                        Premium {item.name}
                      </h3>
                      <p className="text-gray-300">$999.99</p>
                      <div className="flex items-center mt-2">
                        <span className="text-yellow-400">★</span>
                        <span className="text-white ml-1">
                          {getRandomRating()}
                        </span>
                      </div>
                      <button className="mt-2 bg-[#a3152d] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ) : null
              )}

              {/* Third 2x2 Grid (4 smaller cards) */}
              <div className="grid grid-cols-2 gap-1">
                {selectedCollection.items.slice(5, 9).map((item) => (
                  <div
                    key={item.id}
                    className="shadow-lg shadow-[#00000065] p-1 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40  object-cover rounded-lg"
                    />
                    <h3 className="text-base font-semibold text-gray-800 ml-3 mt-1">
                      {item.name}
                    </h3>
                    <div className="flex justify-between my-1 mr-2">
                      <p className="text-gray-600 mx-3">$499.99</p>
                      <div className="flex items-center mx-3">
                        <span className="text-yellow-400">★</span>
                        <span className="text-black ml-1">
                          {getRandomRating()}
                        </span>
                      </div>
                    </div>
                    <button className="mt-0 mx-3 bg-[#d35252] text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">
            Select a collection to view items.
          </p>
        )}
      </div>
    </div>
  );
}

export default Collections;
