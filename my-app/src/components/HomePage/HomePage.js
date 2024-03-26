import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate('/signup');
  };

  return (
    <div className="home-page">
      <button className="get-started" onClick={handleGetStarted}>Get Started</button>
    </div>
  );
}

export default HomePage;