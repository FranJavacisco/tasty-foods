import React, { useState, useEffect } from 'react';
import { Phone, Menu } from 'lucide-react';

const TastyFoods = () => {
  // Estado para el carrusel
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    { src: '/public/images/burger_1.png', alt: 'Delicious Burger' },
    { src: 'public/images/burger_2.png', alt: 'Cheese Burger' },
    { src: 'public/images/burger_3.png', alt: 'Special Burger' }
  ];

  // Cambio automático de imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: 'Burger', image: 'public/images/burger_1.png', price: '$2.90' },
    { name: 'French Fry', image: 'public/images/french fry.png' },
    { name: 'Salad', image: 'public/images/salad.png', price: '$10.90' },
    { name: 'Sandwich', image: 'public/images/sandwich.png' },
    { name: 'Cold Drinks', image: 'public/images/cold drinks.png' },
    { name: 'Combo', image: '/images/combo.png', price: '$19.90' }
  ];

  const promos = [
    { 
      title: 'Salad', 
      discount: '20%', 
      price: '$10.90',
      bgColor: 'bg-red-600',
      image: 'public/images/salad.png'
    },
    { 
      title: 'Burger', 
      discount: '20%', 
      price: '$2.90',
      bgColor: 'bg-gray-800',
      image: 'public/images/burger_3.png'
    },
    { 
      title: 'Combo', 
      discount: '20%', 
      price: '$19.90',
      bgColor: 'bg-yellow-500',
      image: 'public/images/combo.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold">
                Tasty <span className="text-red-600">Foods</span>
              </h1>
            </div>
            
            {/* Menú móvil */}
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>

            <nav className="hidden md:flex space-x-6">
              {['Home', 'Menu', 'Order Food', 'Blog', 'Pages'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="nav-link hover:text-red-600 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-red-600 mr-2" />
                <span className="text-sm">+1-555-127-1491</span>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Order Online
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section con carrusel */}
      <div className="relative bg-gradient-to-b from-gray-100 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,#f3f4f6,transparent)] opacity-50"></div>
        <div className="max-w-6xl mx-auto px-4 py-12 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome To <br />
                Our Tasty <span className="text-red-600">Foods</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Egestas amet facilisis cras suspendisse ate volutpat. 
                Enim el at urnel vitae facilisi neque mel. Pellentesque 
                malesuada mauris proin cursus est amet neque.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4">
                <button className="button-primary bg-yellow-400 text-black px-6 py-3 rounded-md transform hover:scale-105 hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg w-full md:w-auto">
                  Order Now
                </button>
                <button className="button-secondary border-2 border-gray-300 px-6 py-3 rounded-md transform hover:scale-105 hover:border-red-500 transition-all duration-300 hover:shadow-lg w-full md:w-auto">
                  Book a Table
                </button>
              </div>
            </div>

            {/* Carrusel de imágenes */}
            <div className="w-full md:w-1/2 relative z-10 h-[400px] overflow-hidden">
              <div className="relative w-full h-full">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out transform
                      ${index === currentImage 
                        ? 'opacity-100 translate-x-0 scale-100' 
                        : 'opacity-0 translate-x-full scale-95'}`}
                    style={{
                      zIndex: index === currentImage ? 20 : 10,
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Indicadores del carrusel */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 
                      ${currentImage === index 
                        ? 'bg-red-600 w-6' 
                        : 'bg-gray-400 hover:bg-gray-600'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="category-card bg-white rounded-lg p-4 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-16 h-16 object-contain mb-2 transform hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm font-medium text-center">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promotions */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((promo, index) => (
            <div 
              key={index}
              className={`${promo.bgColor} p-6 rounded-lg text-white flex flex-col md:flex-row items-center justify-between transform hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 translate-x-full hover:translate-x-0 transition-transform duration-1000"></div>
              <div className="text-center md:text-left z-10">
                <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                <p className="mb-2">Get a {promo.discount} Discount</p>
                <p className="text-xl font-bold">ON FIRST ORDER</p>
                <p className="text-2xl font-bold mt-2">{promo.price}</p>
              </div>
              <img 
                src={promo.image}
                alt={promo.title}
                className="w-32 h-32 object-contain transform hover:scale-110 transition-transform duration-300 z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TastyFoods;