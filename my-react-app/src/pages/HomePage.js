import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  padding: 2rem 0;
`;

const HeroSection = styled.div`
  position: relative;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  border-radius: 10px;
  overflow: hidden;
  background: #7b1113;
`;

const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/video-cover.png');
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const HeroContent = styled.div`
  padding: 2rem;
  max-width: 800px;
  z-index: 2;
  position: relative;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #f9a826;
  color: #333;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #e69008;
  }
`;

const FeaturedSection = styled.div`
  margin: 3rem 0;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

function HomePage() {
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Check if the video file exists
    fetch('/videos/video-introduction.mp4')
      .then(response => {
        if (!response.ok) {
          setVideoError(true);
        }
      })
      .catch(() => {
        setVideoError(true);
      });
  }, []);

  return (
    <HomeContainer>
      <HeroSection>
        {!videoError ? (
          <HeroVideo
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
          >
            <source src="/videos/video-introduction.mp4" type="video/mp4" />
          </HeroVideo>
        ) : (
          <HeroImage />
        )}
        <HeroOverlay />
        <HeroContent>
          <h1>Digital Bridges: Transforming Nursing Education Through Technology</h1>
          <p>Welcome to my portfolio. I am Dr. Villarino. Use the navigation bar to explore different sections and click on cards for detailed materials.</p>
          <Button to="/transformative-insights">Explore My Journey</Button>
        </HeroContent>
      </HeroSection>

      <FeaturedSection>
        <h2>Featured Projects</h2>
        <CardGrid>
          <Card>
            <CardImage src="/images/instructional-design.png" alt="Instructional Design" />
            <CardContent>
              <h3>Instructional Design for Blended Learning</h3>
              <p>Explore my approach to designing effective blended learning experiences for nursing education.</p>
              <Button to="/instructional-design">View Details</Button>
            </CardContent>
          </Card>

          <Card>
            <CardImage src="/images/pedia-with-neuro-alterations.png" alt="Pediatric Neurologic Care" />
            <CardContent>
              <h3>Neuro Bundle of Care</h3>
              <p>Learn about nursing responsibilities for pediatric patients with neurologic alterations.</p>
              <Button to="/neuro-alterations">View Details</Button>
            </CardContent>
          </Card>

          <Card>
            <CardImage src="/images/pedia-neuro-virtual-lab.png" alt="Virtual Lab" />
            <CardContent>
              <h3>Pediatric Neurologic Virtual Lab</h3>
              <p>Experience an interactive virtual lab for pediatric neurologic care training.</p>
              <Button to="/virtual-lab">Explore Lab</Button>
            </CardContent>
          </Card>
        </CardGrid>
      </FeaturedSection>

      <FeaturedSection>
        <h2>My Learning Journey</h2>
        <p>
          Throughout N224: Use of Technology in Nursing Education, I've explored how digital technologies 
          can revolutionize nursing education in the Philippine context. This course has reshaped my 
          perspective on what it means to be a nursing educator in the digital age.
        </p>
        <Button to="/transformative-insights">Read My Reflections</Button>
      </FeaturedSection>
    </HomeContainer>
  );
}

export default HomePage;
