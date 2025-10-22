import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoGallery from './components/VideoGallery';
import ImageGallery from './components/ImageGallery';
import WebsiteShowcase from './components/WebsiteShowcase';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <VideoGallery />
      <ImageGallery />
      <WebsiteShowcase />
      <Footer />
    </div>
  );
}

export default App;
