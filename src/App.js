import './App.css';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import Videobar from './components/Videobar';
import Form from './components/Form';
import UploadField from './components/UploadField';
import WebsiteEmbed from './components/WebsiteEmbed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slideshow />
      <Videobar />
      <div className="part3">
        <Form />
        <UploadField />
        <WebsiteEmbed url="https://www.nrl.com/" />
      </div>
      <Footer />
    </div>
  );
}

export default App;