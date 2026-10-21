import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Check, ShoppingBag } from 'lucide-react';
import { addToCart, selectCartItems } from './CartSlice.jsx';

const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=720&q=82`;
export const plants = [
  { id: 'monstera', name: 'Monstera Deliciosa', category: 'Statement makers', price: 38, tag: 'Bestseller', description: 'Big, beautiful leaves that make a room feel like a jungle.', image: photo('photo-1614594975525-e45190c55d0b') },
  { id: 'rubber', name: 'Rubber Plant', category: 'Statement makers', price: 32, tag: 'Easy care', description: 'Glossy deep-green foliage with a bold, sculptural shape.', image: photo('photo-1501004318641-b39e6451bec6') },
  { id: 'bird-paradise', name: 'Bird of Paradise', category: 'Statement makers', price: 54, tag: 'Collector favorite', description: 'A sun-loving tropical beauty with unmistakable presence.', image: photo('photo-1597055181300-e3633a917d18') },
  { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', category: 'Statement makers', price: 48, tag: 'Statement', description: 'Large violin-shaped leaves for a bright, airy corner.', image: photo('photo-1617806118233-18e1de247200') },
  { id: 'kentia', name: 'Kentia Palm', category: 'Statement makers', price: 46, tag: 'Pet friendly', description: 'Soft, arching fronds bring a calm, coastal feeling indoors.', image: photo('photo-1593691509543-c55fb32e5cee') },
  { id: 'olive', name: 'Olive Tree', category: 'Statement makers', price: 58, tag: 'New arrival', description: 'Silvery leaves and a Mediterranean spirit for sunny rooms.', image: photo('photo-1600411832986-5c1de6c07d44') },
  { id: 'pothos', name: 'Golden Pothos', category: 'Easy does it', price: 18, tag: 'Beginner pick', description: 'A trailing classic that forgives the occasional missed watering.', image: photo('photo-1614594895304-fe7116ac3b58') },
  { id: 'snake', name: 'Snake Plant', category: 'Easy does it', price: 22, tag: 'Low light hero', description: 'Upright and unfussy, happy in almost any room.', image: photo('photo-1593691509543-c55fb32e5cee') },
  { id: 'zz', name: 'ZZ Plant', category: 'Easy does it', price: 24, tag: 'Low maintenance', description: 'Shiny leaves and a remarkably relaxed watering schedule.', image: photo('photo-1509423350716-97f9360b4e09') },
  { id: 'spider', name: 'Spider Plant', category: 'Easy does it', price: 16, tag: 'Pet friendly', description: 'Playful arching leaves that brighten shelves and desks.', image: photo('photo-1572688484438-313a6e50c333') },
  { id: 'peace-lily', name: 'Peace Lily', category: 'Easy does it', price: 26, tag: 'Airy favorite', description: 'Elegant white blooms and lush leaves for gentle corners.', image: photo('photo-1593691509543-c55fb32e5cee') },
  { id: 'jade', name: 'Jade Plant', category: 'Easy does it', price: 20, tag: 'Sunny spot', description: 'A cheerful, long-lived succulent with plump green leaves.', image: photo('photo-1509423350716-97f9360b4e09') },
  { id: 'calathea', name: 'Calathea Orbifolia', category: 'A touch of color', price: 34, tag: 'Leaf love', description: 'Painterly silver stripes on broad, softly rounded leaves.', image: photo('photo-1593691509543-c55fb32e5cee') },
  { id: 'croton', name: 'Petra Croton', category: 'A touch of color', price: 28, tag: 'Color pop', description: 'A vivid mix of gold, orange, and red in every leaf.', image: photo('photo-1501004318641-b39e6451bec6') },
  { id: 'polka-dot', name: 'Polka Dot Plant', category: 'A touch of color', price: 14, tag: 'Little delight', description: 'Dainty pink-speckled leaves made for bright tabletops.', image: photo('photo-1485955900006-10f4d324d411') },
  { id: 'purple-heart', name: 'Purple Heart', category: 'A touch of color', price: 17, tag: 'Trailing', description: 'Jewel-toned purple stems that spill beautifully over a pot.', image: photo('photo-1497250681960-ef046c08a56e') },
  { id: 'aglaonema', name: 'Pink Aglaonema', category: 'A touch of color', price: 31, tag: 'Colorful leaves', description: 'Easy-going foliage blushed with rosy pink and green.', image: photo('photo-1485955900006-10f4d324d411') },
  { id: 'fittonia', name: 'Pink Fittonia', category: 'A touch of color', price: 15, tag: 'Petite plant', description: 'Tiny leaves with bright veins bring a pop of pattern.', image: photo('photo-1497250681960-ef046c08a56e') },
];

const categories = ['Statement makers', 'Easy does it', 'A touch of color'];
export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  return <section className="shop-section" id="shop">
    <div className="section-heading"><div><span className="eyebrow">Find your new favorite</span><h2>A greener kind of <em>everyday.</em></h2></div><p>Thoughtful plants for bright windows, quiet corners, and everything in between.</p></div>
    {categories.map((category) => <section className="category" key={category} aria-label={category}>
      <div className="category-heading"><h3>{category}</h3><span>{plants.filter((plant) => plant.category === category).length} plants</span></div>
      <div className="product-grid">{plants.filter((plant) => plant.category === category).map((plant) => {
        const added = cartItems.some((item) => item.id === plant.id);
        return <article className="product-card" key={plant.id}>
          <div className="product-photo"><img src={plant.image} alt={plant.name} loading="lazy" /><span className="product-tag">{plant.tag}</span></div>
          <div className="product-info"><div className="product-title"><h4>{plant.name}</h4><strong>${plant.price.toFixed(2)}</strong></div><p>{plant.description}</p><button className={`add-button${added ? ' added' : ''}`} disabled={added} onClick={() => dispatch(addToCart(plant))}>
            {added ? <><Check size={16} /> Added to bag</> : <><ShoppingBag size={16} /> Add to bag</>}
          </button></div>
        </article>;
      })}</div>
    </section>)}
  </section>;
}
