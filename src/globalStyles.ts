import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${theme.background};
    color: ${theme.text};
    line-height: 1.6;
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
    background-image: url('/images/home pic 1.jpeg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    position: relative;
    
    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(249, 249, 249, 0.95);
      z-index: -1;
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif;
    margin-bottom: 1rem;
    color: ${theme.primary};
    font-weight: 600;
  }
  
  h1 {
    font-size: 2.8rem;
    letter-spacing: -0.5px;
  }
  
  h2 {
    font-size: 2.2rem;
    position: relative;
    padding-bottom: 0.75rem;
    margin-bottom: 2rem;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80px;
      height: 3px;
      background: linear-gradient(to right, ${theme.primary}, ${theme.secondary});
      border-radius: 3px;
    }
  }
  
  h3 {
    font-size: 1.8rem;
    color: ${theme.secondary};
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
  
  a {
    color: ${theme.secondary};
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: 500;
    
    &:hover {
      color: ${theme.tertiary};
    }
  }

  .page-container {
    padding: 2rem 0;
    animation: fadeIn 0.5s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  ::selection {
    background-color: ${theme.highlight};
    color: ${theme.primary};
  }
  
  img {
    max-width: 100%;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  section {
    margin: 4rem 0;
  }
  
  .highlight {
    color: ${theme.secondary};
    font-weight: 600;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: ${theme.secondary};
    color: white;
    border-radius: 4px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    
    &:hover {
      background-color: ${theme.tertiary};
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
  }
`;

export default GlobalStyles;
