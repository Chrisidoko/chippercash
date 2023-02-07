import React from "react";
import hero from "./hero.module.scss";
import qr from "./store.svg";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
import bg from "./map.png";
import one from "./01.png";
import Fade from 'react-reveal/Fade';

function Hero() {
  const buttomText = [
    {
      head: "5+ million",
      sub: "Users",
    },
    {
      head: "300,000+",
      sub: "Visa Cards Issued",
    },
    {
      head: "6,000+",
      sub: "US Public Companies to Invest in",
    },
    {
      head: "$1.5+ billion",
      sub: "Total Process Volume per quater",
    },
  ];
  return (
    <section>
      <div className={hero.ad}>
        <div className={hero.layout}>
          <span>
            Match our $30,000 donation to help the supporters get to Qatar World
            Cup 2022🏆
          </span>
        </div>
      </div>
      <div className={hero.hero}>
        <div className={hero.map} style={{ backgroundImage: `url(${bg})` }}>
          <img src={one} className={hero.one} alt="one" />
        </div>
        <div className={hero.layout}>
          <div className={hero.container}>
          <Fade duration={1500}>
            <span className={hero.head}>
              Move Your
              <br />
              Money Freely
            </span>
            <span className={hero.sub}>
              Send and receive money across Africa the fast and easy way. Enjoy
              free transfers and the lowest cross-border rates.
            </span>
            </Fade>
            <div className={hero.btn}>
              <span>Download the app</span>
            </div>
            <div className={hero.container2}>
              <div className={hero.circle}>
                <img src={qr} alt="QR" />
              </div>
              <div className={hero.side}>
                <span className={hero.st}>Scan to download</span>
                <div className={hero.ssflex}>
                  <li className={hero.ss}>
                    <IoLogoApple size={21} />
                    <span>App store</span>
                  </li>
                  <li className={hero.ss}>
                    <IoLogoGooglePlaystore size={21} />
                    <span>Play store</span>
                  </li>
                </div>
              </div>
            </div>
          </div>
          {/* Buttom key figures section */}
          <div className={hero.buttom}>
            <div className={hero.b1}>
              <div className={hero.stroke}></div>
              <span>Chipper Cash key figures</span>
            </div>
            <div className={hero.b2}>
              {buttomText.map((val, key) => {
                return (
                  <div className={hero.b2_vflex} key={key}>
                    <span className={hero.b2_head}>{val.head}</span>
                    <span className={hero.b2_sub}>{val.sub}</span>
                  </div>
                );
              })}
              {/* for last vlex sizing problem*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
