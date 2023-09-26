"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialsSection = () => {
  return (
    <div className="bg-gradient-to-tl from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 py-16">
      <div className="container mx-auto px-4">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Testimonials</h2>

          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showArrows={true}
            showStatus={false}
            className="carousel"
          >
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-4 shadow-md mx-auto max-w-md w-180 h-100 mb-8">
              <div className="mb-4 mx-auto rounded-full overflow-hidden w-32 h-32">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                  alt="Maria Smantha"
                  className="w-32 h-32 object-cover"
                />
              </div>
              <h5 className="text-lg font-semibold mb-2 text-black">Maria Smantha</h5>
              <h6 className="text-sm font-medium text-black dark:text-black py-1">
                Dermatology Patient
              </h6>
              <p className="text-sm text-black">
                DERMID has truly transformed my skincare journey. Their
                cutting-edge technology and personalized treatment plans have
                made a significant difference in my skin's health and appearance.
                I couldn't be happier with the results!
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-4 shadow-md mx-auto max-w-md w-180 h-100 mb-8">
              <div className="mb-4 mx-auto rounded-full overflow-hidden w-32 h-32">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                  alt="Lisa Cudrow"
                  className="w-32 h-32 object-cover"
                />
              </div>
              <h5 className="text-lg font-semibold mb-2 text-black">Lisa Cudrow</h5>
              <h6 className="text-sm font-medium text-black dark:text-black py-1">
                Medical Professional
              </h6>
              <p className="text-sm text-black">
                As a medical professional, I've witnessed the remarkable impact
                of DERMID on my patients. This advanced dermatology tool is a
                game-changer, providing precise diagnosis and personalized
                treatment plans. It's a valuable asset in the field of
                dermatology.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-4 shadow-md mx-auto max-w-md w-180 h-100 mb-8">
              <div className="mb-4 mx-auto rounded-full overflow-hidden w-32 h-32">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                  alt="John Smith"
                  className="w-32 h-32 object-cover"
                />
              </div>
              <h5 className="text-lg font-semibold mb-2 text-black">John Smith</h5>
              <h6 className="text-sm font-medium text-black dark:text-black py-1">
                Beauty Blogger
              </h6>
              <p className="text-sm text-black">
                DERMID has been a game-changer in my beauty routine. Their
                expert insights and tailored skincare recommendations have
                enhanced my skin's health and radiance. I highly recommend DERMID
                to anyone looking for effective skincare solutions.
              </p>
            </div>
          </Carousel>
        </section>
      </div>
    </div>
  );
};

export default TestimonialsSection;
