import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft,faCircleArrowRight,faCircleXmark,faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/12/15/Pictures/_9f2b6346-ffd3-11e8-9457-b1b429387a4e.jpg",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/03/a5/39/d6/the-taj-mahal-palace.jpg"
    },
    {
      src: "https://th.bing.com/th/id/R.97f99cf124891310a1cd1912aaaa9b39?rik=8HWOgRyHeSVzwg&riu=http%3a%2f%2fwww.extravaganzi.com%2fwp-content%2fuploads%2f2013%2f09%2fEstate-at-Barnaby-Road2.jpg&ehk=oY7ZeDyJ%2bOBdLrcIbyT1fKZN7rvLMql3DmZZTR0%2fjOQ%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      src: "https://th.bing.com/th/id/R.0184adef35237c16743d3982e68b66d2?rik=QzT%2bVNC6%2bb1beA&riu=http%3a%2f%2fwww.edenluxurytravel.co.uk%2fEden+Collection+Images%2fOneandOnly%2fNov+15%2fPalace.jpg&ehk=BR3r2rJJDCiiqEksUdniYWpNzJBoe2L9EPh%2fEZt6bUE%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      src: "https://th.bing.com/th/id/R.7959b89df561ac84a35dda1d6fdf5c8f?rik=nDPcKeISDw%2fUqg&riu=http%3a%2f%2fwww.piersland.co.uk%2fimages_%2fhoneymoon-suite-image-2-4f55.jpg-sizer-850x850.jpg&ehk=vabozYrOrcXjvinmz20nrVGaQXlPfhRJDzUYT%2fvoBmE%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      src: "https://i.pinimg.com/originals/a9/11/c7/a911c740bd391ed11f5e5c7fbea16df9.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">The Taj Mahal Tower Mumbai</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Apollo Bunder, Colaba, 400001 Mumbai, India </span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over Rs.11000 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              Built in 1973, the iconic The Taj Mahal Tower Mumbai stands majestically across from the Gateway of India,
              overlooking the Arabian Sea. The Tower stands in harmonious contrast to The Taj Mahal Palace with its 
              arched balconies and newly refurbished rooms. Sprawling over 2.6 acres, this luxurious hotel features 10
              restaurants and a variety of traditional Indian therapies at Jiva Spa. <br/>
              Guests are spoiled for choice in dining options – the famous Wasabi by Morimoto offers innovative Japanese cuisine,
              and other gourmet highlights include the Golden Dragon Chinese Restaurant and the poolside Aquarius Lounge.<br/>
              Stylishly designed, the rooms offer amazing sea, city or pool views. Each room includes a 32-inch flat-screen TV,
              a well-stocked mini-bar, free WiFi and a luxurious bathroom.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>Rs. 11000</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
