import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Karousel = () => {
    return ( 
        <div style={{ display: 'block', width: 600, padding: 30, margin:"auto" }}>
        <h2>Brandovi</h2>
        <Carousel variant="dark" className='carousel'>
           <Carousel.Item interval={1000}>
           <Link to="/brands/dynatone">
               <img
              className="d-block w-100"
              src="https://firebasestorage.googleapis.com/v0/b/vesele-note.appspot.com/o/123-manufacturer_default.jpg?alt=media&token=6421b779-d677-494b-9fb1-541b5d84beda"
              alt="Dynatone"
              
            />
            </Link>
            
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Link to="/brands/audio-technica"><img
              className="d-block w-100"
  src="https://firebasestorage.googleapis.com/v0/b/vesele-note.appspot.com/o/101-manufacturer_default.jpg?alt=media&token=01c1de6f-1613-4ced-9993-38b55a63de11"
              alt="audio-technica"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Link to="/brands/zildjian"><img
              className="d-block w-100"
  src="https://firebasestorage.googleapis.com/v0/b/vesele-note.appspot.com/o/13-manufacturer_default.jpg?alt=media&token=ac1aeda3-8fad-43c4-b748-9972a569aa8f"
              alt="zildjian"
            />
            </Link>
          </Carousel.Item>
          
          <Carousel.Item interval={1000}>
            <Link to="/brands/smart"><img
              className="d-block w-100"
  src="https://firebasestorage.googleapis.com/v0/b/vesele-note.appspot.com/o/173-manufacturer_default.jpg?alt=media&token=37b5ad54-a3a4-440c-8bd8-67ae9ff77d87"
              alt="smart"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Link to="/brands/fender"><img
              className="d-block w-100"
  src="https://firebasestorage.googleapis.com/v0/b/vesele-note.appspot.com/o/50-manufacturer_default.jpg?alt=media&token=228e969b-448d-4bac-877e-2797bacd9190"
              alt="fender"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Link to="/brands/casio"><img
              className="d-block w-100"
  src="https://firebasestorage.googleapis.com/v0/b/vesele-note.appspot.com/o/47-manufacturer_default.jpg?alt=media&token=679010f9-8e75-4bb0-b190-22c1ce322eda"
              alt="casio"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Link to="/brands/ernie ball"><img
              className="d-block w-100"
  src="https://firebasestorage.googleapis.com/v0/b/vesele-note.appspot.com/o/95-manufacturer_default.jpg?alt=media&token=308551ad-8a24-407a-acce-0dda889faa87"
              alt="ernie ball"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Link to="/brands/dw"><img
              className="d-block w-100"
  src="https://firebasestorage.googleapis.com/v0/b/vesele-note.appspot.com/o/125-manufacturer_default.jpg?alt=media&token=73520ae3-0016-4379-9a84-b8ec566018d0"
              alt="dw"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Link to="/brands/superlux"><img
              className="d-block w-100"
  src="https://firebasestorage.googleapis.com/v0/b/vesele-note.appspot.com/o/170-manufacturer_default.jpg?alt=media&token=8fa24cfc-401b-4df6-98b1-ed6f31546074"
              alt="superlux"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Link to="/brands/rockbag"><img
              className="d-block w-100"
  src="https://firebasestorage.googleapis.com/v0/b/vesele-note.appspot.com/o/35-manufacturer_default.jpg?alt=media&token=7c6cd2f3-793c-46f0-8ed9-fcc1595c905b"
              alt="rockbag"
            />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Link to="/brands/ld-systems"><img
              className="d-block w-100"
  src="https://firebasestorage.googleapis.com/v0/b/vesele-note.appspot.com/o/25-manufacturer_default.jpg?alt=media&token=41b89d88-6fa8-46d7-817a-d4e23defc0ee"
              alt="ld-systems"
            />
            </Link>
          </Carousel.Item>
          
          <Carousel.Item interval={1000}>
          <Link to="/brands/jim dunlop"><img
              className="d-block w-100"
  src="https://firebasestorage.googleapis.com/v0/b/vesele-note.appspot.com/o/16-manufacturer_default.jpg?alt=media&token=125537ed-0ec6-453a-9f78-6f13f80eba1a"
              alt="jim dunlop"
            />
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
     );
}
 
export default Karousel;
 


