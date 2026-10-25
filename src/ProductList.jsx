import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRight, Leaf, ShoppingBag } from 'lucide-react';
import { addItem, selectAddedToCart, selectCartQuantity } from './CartSlice.jsx';

const image = (id) => 'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=720&q=82';

export const plantsArray = [
  { category: 'Statement Plants', plants: [
    { name: 'Monstera Deliciosa', price: 38, image: image('photo-1614594975525-e45190c55d0b'), description: 'Big, beautiful leaves for a lush corner.' },
    { name: 'Rubber Plant', price: 32, image: image('photo-1501004318641-b39e6451bec6'), description: 'Glossy foliage with a sculptural shape.' },
    { name: 'Bird of Paradise', price: 54, image: image('photo-1597055181300-e3633a917d18'), description: 'A sun-loving tropical beauty.' },
    { name: 'Fiddle Leaf Fig', price: 48, image: image('photo-1617806118233-18e1de247200'), description: 'Large leaves for a bright, airy room.' },
    { name: 'Kentia Palm', price: 46, image: image('photo-1593691509543-c55fb32e5cee'), description: 'Soft fronds bring a calm, coastal feel.' },
    { name: 'Olive Tree', price: 58, image: image('photo-1600411832986-5c1de6c07d44'), description: 'Silvery leaves for a sunny space.' },
  ] },
  { category: 'Easy Care Favorites', plants: [
    { name: 'Golden Pothos', price: 18, image: image('photo-1614594895304-fe7116ac3b58'), description: 'A trailing classic that is easy to love.' },
    { name: 'Snake Plant', price: 22, image: image('photo-1593691509543-c55fb32e5cee'), description: 'Upright, unfussy, and happy in most rooms.' },
    { name: 'ZZ Plant', price: 24, image: image('photo-1509423350716-97f9360b4e09'), description: 'Shiny leaves and a relaxed watering routine.' },
    { name: 'Spider Plant', price: 16, image: image('photo-1572688484438-313a6e50c333'), description: 'Playful leaves brighten shelves and desks.' },
    { name: 'Peace Lily', price: 26, image: image('photo-1593691509543-c55fb32e5cee'), description: 'Elegant white blooms and lush green leaves.' },
    { name: 'Jade Plant', price: 20, image: image('photo-1509423350716-97f9360b4e09'), description: 'A cheerful succulent for a sunny sill.' },
  ] },
  { category: 'Colorful Leaves', plants: [
    { name: 'Calathea Orbifolia', price: 34, image: image('photo-1593691509543-c55fb32e5cee'), description: 'Silver stripes on broad, rounded leaves.' },
    { name: 'Petra Croton', price: 28, image: image('photo-1501004318641-b39e6451bec6'), description: 'Gold, orange, and red in every leaf.' },
    { name: 'Polka Dot Plant', price: 14, image: image('photo-1485955900006-10f4d324d411'), description: 'Pink-speckled leaves for bright tabletops.' },
    { name: 'Purple Heart', price: 17, image: image('photo-1497250681960-ef046c08a56e'), description: 'Jewel-toned stems spill over the pot.' },
    { name: 'Pink Aglaonema', price: 31, image: image('photo-1485955900006-10f4d324d411'), description: 'Easy-going foliage with rosy pink tones.' },
    { name: 'Pink Fittonia', price: 15, image: image('photo-1497250681960-ef046c08a56e'), description: 'Tiny leaves with bright, patterned veins.' },
  ] },
];

export function Navbar({ currentPage, onNavigate }) {
  const cartQuantity = useSelector(selectCartQuantity);
  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); onNavigate('home'); }}>
        <span className="brand-mark"><Leaf size={19} /></span><span>paradise<span className="brand-light">nursery</span></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <button className={currentPage === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => onNavigate('home')}>Home</button>
        <button className={currentPage === 'plants' ? 'nav-link active' : 'nav-link'} onClick={() => onNavigate('plants')}>Plants</button>
        <button className={currentPage === 'cart' ? 'cart-link active' : 'cart-link'} onClick={() => onNavigate('cart')} aria-label={'Cart, ' + cartQuantity + ' items'}>
          <ShoppingBag size={18} /><span>Cart</span><span className="cart-count">{cartQuantity}</span>
        </button>
      </nav>
    </header>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const addedToCart = useSelector(selectAddedToCart);
  return (
    <main className="catalog-page">
      <section className="catalog-intro"><span className="eyebrow">The plant edit</span><h1>Find your new <em>favorite.</em></h1><p>Thoughtful plants for bright windows, quiet corners, and everywhere in between.</p></section>
      {plantsArray.map((category) => (
        <section className="plant-category" key={category.category}>
          <div className="category-heading"><h2>{category.category}</h2><span>{category.plants.length} plants</span></div>
          <div className="product-list">
            {category.plants.map((plant) => (
              <article className="plant-card" key={plant.name}>
                <div className="plant-image"><img src={plant.image} alt={plant.name} loading="lazy" /></div>
                <div className="plant-info"><div className="plant-title"><h3>{plant.name}</h3><strong>{'$' + plant.price.toFixed(2)}</strong></div><p>{plant.description}</p>
                  <button className="add-button" onClick={() => dispatch(addItem(plant))} disabled={addedToCart[plant.name]}>
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'} <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
