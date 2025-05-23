import React from 'react';
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { UI_TEXT } from '../constants';

export default function Home() {
  // Sample data for demonstration
  const sampleProperties = [
    {
      id: '1',
      title: 'Modern Downtown Apartment',
      description: 'Beautiful apartment in the heart of the city with all modern amenities.',
      price: 120,
      location: 'Downtown, City Center',
      rating: 4.8,
      image: '/assets/images/placeholder.jpg',
    },
    {
      id: '2',
      title: 'Cozy Beach House',
      description: 'Relaxing beachfront property with stunning ocean views.',
      price: 200,
      location: 'Beachfront, Ocean View',
      rating: 4.9,
      image: '/assets/images/placeholder.jpg',
    },
    {
      id: '3',
      title: 'Mountain Cabin Retreat',
      description: 'Peaceful cabin surrounded by nature, perfect for a getaway.',
      price: 85,
      location: 'Mountain View, Forest',
      rating: 4.7,
      image: '/assets/images/placeholder.jpg',
    },
  ];

  const handleCardClick = (propertyId: string) => {
    console.log(`Clicked on property: ${propertyId}`);
    // Future navigation logic will go here
  };

  const handleBookNow = () => {
    console.log('Book Now clicked');
    // Future booking logic will go here
  };

  return (
    <>
      <Head>
        <title>{UI_TEXT.APP_TITLE}</title>
        <meta name="description" content={UI_TEXT.APP_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                {UI_TEXT.APP_TITLE}
              </h1>
              <Button
                variant="primary"
                size="medium"
                onClick={handleBookNow}
              >
                {UI_TEXT.BOOK_NOW}
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {UI_TEXT.APP_DESCRIPTION}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover unique places to stay with local hosts in over 190 countries. 
              Belong anywhere with our ALX Listing App.
            </p>
          </div>

          {/* Button Examples */}
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="primary" size="small">
              Primary Small
            </Button>
            <Button variant="secondary" size="medium">
              Secondary Medium
            </Button>
            <Button variant="outline" size="large">
              Outline Large
            </Button>
          </div>

          {/* Property Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProperties.map((property) => (
              <Card
                key={property.id}
                title={property.title}
                description={property.description}
                price={property.price}
                location={property.location}
                rating={property.rating}
                image={property.image}
                onClick={() => handleCardClick(property.id)}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600">
              <p>&copy; 2024 ALX Listing App. Built with Next.js, TypeScript, and TailwindCSS.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
