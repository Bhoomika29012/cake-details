import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <main className="about-us">
      <div className="about-us-content">
        <h1>About Sweet Slice Cakes</h1>
        <p className="intro">
          Welcome to Sweet Slice Cakes, your go-to destination for delicious cakes for every occasion. Whether you're celebrating a birthday, anniversary, or any special moment, we have the perfect cake to make your event memorable.
        </p>

        <section className="our-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Sweet Slice Cakes was born out of a passion for baking and a desire to bring joy through the art of cake making. Over the years, we have perfected our recipes and expanded our range to offer a wide variety of cakes, including vegan, gluten-free, and custom cakes, to cater to all needs.
          </p>
          <p>
            Our cakes are made with the finest ingredients and are carefully crafted to ensure they not only taste amazing but also look stunning. We believe every celebration deserves a cake that adds an extra layer of sweetness to the moment.
          </p>
        </section>

        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
            At Sweet Slice Cakes, our mission is simple: to create beautiful, delicious cakes that bring people together. We are committed to delivering fresh, high-quality cakes that are designed to meet your tastes and dietary preferences.
          </p>
          <p>
            We are dedicated to providing excellent customer service and ensuring that every cake we deliver adds a touch of sweetness to your special day.
          </p>
        </section>

        <section className="our-values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Quality:</strong> We use the best ingredients to create cakes that taste as good as they look.</li>
            <li><strong>Creativity:</strong> From classic designs to custom cakes, we strive to create something unique for every customer.</li>
            <li><strong>Customer Satisfaction:</strong> Your happiness is our priority, and we aim to exceed your expectations with every cake.</li>
          </ul>
        </section>

        <section className="meet-the-team">
          <h2>Meet the Team</h2>
          <p>
            Our talented team of bakers, decorators, and customer service staff work together to bring your cake dreams to life. We take pride in our craft, and our team is always ready to create something special just for you.
          </p>
        </section>
      </div>
    </main>
  );
}

export default AboutUs;
