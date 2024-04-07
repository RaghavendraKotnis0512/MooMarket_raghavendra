import React from 'react';
import Header from '../components/Main/header';
import Footer from '../components/Main/footer';

const About = () => {
  const containerStyle = {
    padding: '50px 20px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    
    color: '#333',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#666',
  };

  const featureContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '50px',
  };

  const featureStyle = {
    flex: '1',
    maxWidth: '300px',
    margin: '0 20px 20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  };

  const featureHoverStyle = {
    transform: 'translateY(-5px)',
  };

  const iconStyle = {
    width: '50px',
    height: '50px',
    marginBottom: '20px',
  };

  const featureTitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  };

  const featureDescriptionStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.5',
    color: '#666',
  };

  return (
    <div>
    <Header/>
    <div style={containerStyle}>
      <h1 style={titleStyle}>About MooMarket</h1>
      <p style={descriptionStyle}>
        Welcome to MooMarket, your one-stop destination for fresh, locally sourced produce delivered straight from the farm to your doorstep. At MooMarket, we're passionate about fostering a direct connection between farmers and consumers, ensuring that you receive the highest quality products while supporting local agriculture.
      </p>
      <div style={featureContainerStyle}>
        <div style={{...featureStyle, ...featureHoverStyle}}>
          <img src="/images/freshness-icon.png" alt="Freshness Icon" style={iconStyle} />
          <h3 style={featureTitleStyle}>Freshness Guaranteed</h3>
          <p style={featureDescriptionStyle}>We source our products directly from trusted local farmers, ensuring that you receive the freshest produce possible.</p>
        </div>
        <div style={{...featureStyle, ...featureHoverStyle}}>
          <img src="/images/support-icon.png" alt="Support Icon" style={iconStyle} />
          <h3 style={featureTitleStyle}>Support Local Agriculture</h3>
          <p style={featureDescriptionStyle}>By shopping at MooMarket, you're supporting local farmers and their families, promoting sustainable agriculture.</p>
        </div>
        <div style={{...featureStyle, ...featureHoverStyle}}>
          <img src="/images/convenience-icon.png" alt="Convenience Icon" style={iconStyle} />
          <h3 style={featureTitleStyle}>Convenience Redefined</h3>
          <p style={featureDescriptionStyle}>Shop from the comfort of your home and enjoy hassle-free delivery straight to your doorstep.</p>
        </div>
        <div style={{...featureStyle, ...featureHoverStyle}}>
          <img src="/images/transparency-icon.png" alt="Transparency Icon" style={iconStyle} />
          <h3 style={featureTitleStyle}>Transparency and Traceability</h3>
          <p style={featureDescriptionStyle}>We provide detailed information about the origins of each product, ensuring transparency every step of the way.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;
