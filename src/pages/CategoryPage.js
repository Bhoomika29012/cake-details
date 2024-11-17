import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './CategoryPage.css';

const cakesData = {
  Birthday: [
    { id: 1, name: 'Chocolate Cake', description: 'A delicious chocolate cake for birthdays!', price: 1000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-G6WN2kGzy408O9oFdyzCWbjt3FFTxggng&s' },
    { id: 2, name: 'Vanilla Cake', description: 'A classic cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SML1kS8LJamx0nOjZGC7EISu3aOW0REKYg&s' },
    { id: 3, name: 'Fruit Cake', description: 'A classic  cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIXBj3U6dc5JGWM4WnJlh03cVatKpXct22Q&s' },
    { id: 4, name: 'RedVelvet Cake', description: 'A classic cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8C517mk0U8Ln2UWxqMyBQbBUNpkbWuVWCaA&s' },
    { id: 5, name: 'Cream Cake', description: 'A classic  cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-G6WN2kGzy408O9oFdyzCWbjt3FFTxggng&s' },
    { id: 6, name: ' Black forest Cake', description: 'A classic cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutxWAteLrrGdqAbJNFU3kctSz1uJZesD6cg&s' },
    { id: 7, name: 'Chocolate Cake', description: 'A classic cake, perfect for  celebrations!', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVMKUjh71LxlDjvx6df43DTSTjGifEMLntg&s' },
    { id: 8, name: 'Fruit Cake', description: 'A classic cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SML1kS8LJamx0nOjZGC7EISu3aOW0REKYg&s' },
    { id: 9, name: 'Chocolate Delight', description: 'A classic cake, perfect for  celebrations!', price: 1000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8C517mk0U8Ln2UWxqMyBQbBUNpkbWuVWCaA&s' },
    { id: 10, name: 'Peanut Butter Cup Indulgence', description: 'A classic cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVG6q-0-NXHhKIkVaZdbdaj0SRGyZOHSdm-w&s' },
    { id: 11, name: 'Pistachio Rose Dream', description: 'A classic cake, perfect for  celebrations!', price: 3000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIXBj3U6dc5JGWM4WnJlh03cVatKpXct22Q&s' },
    { id: 12, name: 'Venilla cake', description: 'A classic cake, perfect for  celebrations!', price: 800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SML1kS8LJamx0nOjZGC7EISu3aOW0REKYg&s' }

],
  Anniversary: [
    { id: 13, name: 'Chocolate Cake', description: 'The rich and luxurious red velvet cake for anniversaries!', price: 1500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutxWAteLrrGdqAbJNFU3kctSz1uJZesD6cg&s' },
    { id: 14, name: ' Black forest Cake', description: 'A classic  cake, perfect for  celebrations!', price: 800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHieIHT-yKX87sxbUEOXTgGxqXG3RhWD-Ajg&s' },
    { id: 15, name: 'Honey Almond Crunch', description: 'A classic cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-G6WN2kGzy408O9oFdyzCWbjt3FFTxggng&s' },
    { id: 16, name: 'Peanut Butter Cup Indulgence', description: 'A classic  cake, perfect for  celebrations!', price: 1100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8C517mk0U8Ln2UWxqMyBQbBUNpkbWuVWCaA&s' },
    { id: 17, name: 'Classic Vanilla Cake', description: 'A classic  cake, perfect for  celebrations!', price: 850, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoR9CeE4H2Mnppb9TtnkOh5e1H5Eq3ZGPd8w&s' },
    { id: 18, name: 'Tropical Mango Coconut Cake', description: 'A classic  cake, perfect for  celebrations!', price: 670, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8C517mk0U8Ln2UWxqMyBQbBUNpkbWuVWCaA&s' },
    { id: 19, name: 'Pistachio Rose Dream', description: 'A classic  cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-G6WN2kGzy408O9oFdyzCWbjt3FFTxggng&s' },
    { id: 20, name: 'Chocolate Delight', description: 'A classic  cake, perfect for  celebrations!', price: 1050, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVG6q-0-NXHhKIkVaZdbdaj0SRGyZOHSdm-w&s' },
    { id: 21, name: 'Classic Vanilla Cake', description: 'A classic cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-G6WN2kGzy408O9oFdyzCWbjt3FFTxggng&s' },
    { id: 22, name: ' Black forest Cake', description: 'A classic  cake, perfect for  celebrations!', price: 2000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoR9CeE4H2Mnppb9TtnkOh5e1H5Eq3ZGPd8w&s' },
    { id: 23, name: 'Venilla cake', description: 'A classic  cake, perfect for  celebrations!', price: 250, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIXBj3U6dc5JGWM4WnJlh03cVatKpXct22Q&s' },
    { id: 24, name: 'Dark Chocolate Raspberry Ganache', description: 'A classic  cake, perfect for  celebrations!', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-G6WN2kGzy408O9oFdyzCWbjt3FFTxggng&s' }
    


  ],
  Celebration: [
    { id: 25, name:'Chocolate Cake', description: 'A fresh fruit cake for all kinds of celebrations!', price: 1200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSKGwcL4Ir1oZ0nP8E2TjvqVF8Pp5iRZtig&s' },
    { id: 26, name: 'Venilla cake', description: 'A classic  cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMq-hm0y2dQt4trbyETqzXvvtOor1sKeOVNA&s' },
    { id: 27, name: 'Peanut Butter Cup Indulgence', description: 'A classic  cake, perfect for  celebrations!', price: 800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0RObWyLlcu1ofrI9oYnRjd7VgjCusmVnUy4DADmj61tngj-iVhWFW9lx6XN45_gMyYQ&usqp=CAU' },
    { id: 28, name: ' Black forest Cake', description: 'A classic  cake, perfect for  celebrations!', price: 850, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoR9CeE4H2Mnppb9TtnkOh5e1H5Eq3ZGPd8w&s' },
    { id: 29, name: 'Pistachio Rose Dream', description: 'A classic  cake, perfect for  celebrations!', price: 1150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHieIHT-yKX87sxbUEOXTgGxqXG3RhWD-Ajg&s' },
    { id: 30, name: 'Chocolate Delight', description: 'A classic  cake, perfect for  celebrations!', price: 850, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutxWAteLrrGdqAbJNFU3kctSz1uJZesD6cg&sg' },
    { id: 31, name: 'Classic Vanilla Cake', description: 'A classic  cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-G6WN2kGzy408O9oFdyzCWbjt3FFTxggng&s' },
    { id: 32, name: 'Venilla cake', description: 'A classic  cake, perfect for  celebrations!', price: 1500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVMKUjh71LxlDjvx6df43DTSTjGifEMLntg&s' },
    { id: 33, name: 'Peanut Butter Cup Indulgence', description: 'A classic  cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-G6WN2kGzy408O9oFdyzCWbjt3FFTxggng&s' },
    { id: 34, name: ' Black forest Cake', description: 'A classic cake, perfect for  celebrations!', price: 600, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVG6q-0-NXHhKIkVaZdbdaj0SRGyZOHSdm-w&s' },
    { id: 35, name: 'Tropical Mango Coconut Cake', description: 'A classic  cake, perfect for  celebrations!', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIXBj3U6dc5JGWM4WnJlh03cVatKpXct22Q&s' },
    { id: 36, name: 'Chocolate Delight', description: 'A classic  cake, perfect for  celebrations!', price: 800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-G6WN2kGzy408O9oFdyzCWbjt3FFTxggng&s' }


  ]
};

function CategoryPage({ addToCart }) {
  const { category } = useParams();
  const cakes = cakesData[category] || [];
  const navigate = useNavigate();

  const handleAddToCart = (cake) => {
    addToCart(cake);
    navigate('/cart'); // Navigate to the cart after adding the item
  };

  return (
    <main className="category-page">
      <h2>{category} Cakes</h2>
      <div className="cakes-list">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-card">
            <img src={cake.image} alt={cake.name} className="cake-image" />
            <h3>{cake.name}</h3>
            <p>{cake.description}</p>
            <p className="price">₹{cake.price}</p>
            <button onClick={() => handleAddToCart(cake)} className="add-to-cart">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default CategoryPage;
