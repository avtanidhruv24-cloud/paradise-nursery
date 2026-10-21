import React from 'react';
import { Leaf, Heart, Sprout } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-image" role="img" aria-label="Sunlit indoor garden filled with lush houseplants" />
      <div className="about-copy">
        <span className="eyebrow">A little about us</span>
        <h2>Good things grow <em>slowly.</em></h2>
        <p>Paradise Nursery began with a simple belief: a little green can make any space feel more like home. We bring together thoughtful, easy-to-love plants and the know-how to help them thrive.</p>
        <div className="values-list">
          <div><span className="value-icon"><Leaf size={18} /></span><span><strong>Plants with purpose</strong><small>Responsibly grown, carefully chosen.</small></span></div>
          <div><span className="value-icon"><Heart size={18} /></span><span><strong>Care made simple</strong><small>Friendly guidance for every plant parent.</small></span></div>
          <div><span className="value-icon"><Sprout size={18} /></span><span><strong>Room to grow</strong><small>Small rituals, a little more joy.</small></span></div>
        </div>
      </div>
    </section>
  );
}
