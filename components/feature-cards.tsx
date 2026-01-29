"use client";

import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

function FeatureCard({ image, title, description, linkText, linkHref }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="overflow-hidden mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover"
          style={{ aspectRatio: "3/2" }}
        />
      </div>
      <h3 className="text-card-title uppercase tracking-widest mb-3">
        <a href={linkHref} className="text-primary hover:text-primary-dark transition-colors">
          {title}
        </a>
      </h3>
      <p className="text-body text-gray-600 mb-4 font-garamond px-4">
        {description}
      </p>
      <a
        href={linkHref}
        className="inline-flex items-center gap-1 text-primary hover:text-primary-dark transition-colors text-sm"
      >
        {linkText}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

export function FeatureCards() {
  return (
    <section className="py-8 lg:py-12 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <FeatureCard
            image="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg"
            title="About"
            description="Find out about our organization and mission."
            linkText="Learn More"
            linkHref="https://www.bitcoinassociation.ch/about-1"
          />
          <FeatureCard
            image="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg"
            title="Join US"
            description="You can become a contributor to our cause, or participate yourself."
            linkText="Find Out How"
            linkHref="https://www.bitcoinassociation.ch/meetups-events"
          />
        </div>
      </div>
    </section>
  );
}
