import { Leaf } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-us-container" id="about-us">
      <div className="about-us-image" role="img" aria-label="Green plants in a sunlit home" />
      <div className="about-us-copy">
        <span className="eyebrow">Rooted in care</span>
        <h2>A little more green, a little more <em>home.</em></h2>
        <p>Paradise Nursery is a welcoming place for plant lovers at every stage. We bring together thoughtful, healthy plants that make it easy to create a calmer, greener home.</p>
        <p>From choosing your first leafy friend to growing a collection, we believe plant care should feel joyful and approachable. Every plant is selected with care, and every new plant parent is welcome here.</p>
        <div className="about-note"><Leaf size={18} /><span>Grow at your own pace. We’re happy you’re here.</span></div>
      </div>
    </section>
  );
}
