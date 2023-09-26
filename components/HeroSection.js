"use client"
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-screen relative" style={{ backgroundImage: 'url("image1.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to DERM-ID</h1>
          <p className="text-lg mb-8">
            Your trusted partner for accurate skin disease predictions.
          </p>
          <Link href="/Dashboard" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out">
              Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



  