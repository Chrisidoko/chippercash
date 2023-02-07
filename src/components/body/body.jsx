import React from "react";
import body from "./body.module.scss";
import { countryData } from "./bodyData";
import transaction from "./images/img_transact.png";
import placeholder from "./images/video-placeholder.jpg";
import profile from "./images/rosie.jpg";
import profile2 from "./images/adeniyi.jpg";
import { BsPlayCircleFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';

function Body() {
  return (
    <>
      {/*con for container */}
      <div className={body.con_1}>
        <div className={body.layout}>
          {/*first Section*/}
          
          <div className={body.flex1}>
          <Fade duration={1500}>
            <div className={body.grid}>
              <span className={body.head}>
                Transact Across
                <br />
                Africa & Beyond
              </span>
              <span className={body.sub}>
                Move money across town, across Africa or across an ocean.
                Chipper Cash is the borderless way to send and receive money.
              </span>
              <div className={body.fancy1}>
                <div className={body.stroke1}></div>
                <span className={body.fancy_text1}>
                  Get started with Chipper Cash
                </span>
              </div>
            </div>
            </Fade>
            <img src={transaction} className={body.img1} alt="transaction" />
          </div>
          
        </div>
       
        {/*Second Section(countries)*/}

        <div className={body.countries}>
          <div className={body.layout}>
            <span className={body.text1}>
              Available in 7 countries today, with many more coming soon
            </span>
            <div className={body.con_2}>
              {countryData.map((val, key) => {
                return (
                  <div
                    className={body.country}
                    key={key}
                    style={{ backgroundImage: `url(${val.Image})` }}
                  >
                    <div className={body.country_container}></div>
                    <span>{val.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/*Third Section(Burna Boy)*/}
      <div className={body.burna}>
        <div className={body.first}>
          <div className={body.layout}>
            <div className={body.burna_flex}>
              <span className={body.b_head}>
                Chipper Special Event - Unlocking Global Opportunities
              </span>
              <span className={body.b_sub}>
                Our launch in the United States, the global partnership with
                Burna Boy, and Twitter Tips integration are all steps in our
                journey to make sending money to, from, and across Africa easy,
                accessible, and maybe even fun. Watch the full event.
              </span>
              <div
                className={body.video}
                style={{ backgroundImage: `url(${placeholder})` }}
              >
                <div className={body.play_icon}>
                  <BsPlayCircleFill />
                </div>
              </div>
            </div>
          </div>
        </div>
       

        {/*fouth Section*/}
        <div className={body.fourth}>
          <div className={body.layout}>
            <div className={body.horizontal}>
              <div className={body.vertical1}>
                <div className={body.comment}>
                  <img src={profile} className={body.profile} alt="rosie" />
                  <div className={body.com_flex}>
                    <span className={body.com_text}>
                      Great app to send and receive money across a number of
                      countries, highly recommended as a money transfer
                      alternative.
                    </span>
                    <span className={body.com_text2}>
                      Amai Rosie, 6 June, 2020
                    </span>
                  </div>
                </div>
                <div className={body.position}>
                  <div className={body.comment}>
                    <img
                      src={profile2}
                      className={body.profile}
                      alt="adeniyi"
                    />
                    <div className={body.com_flex}>
                      <span className={body.com_text}>
                        Chipper cash is the coolest app ever. Packed with great
                        features, very reliable, fast transactions, easy to use
                        and cool discounts.
                      </span>
                      <span className={body.com_text2}>
                        Sunday Adeniyi, 9 Aug, 2020
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={body.grid2}>
                <span className={body.head}>Trusted & Secure</span>
                <span className={body.sub}>
                  Join over 4 million people securely sending and receiving
                  money with Chipper Cash.
                </span>
                <div className={body.fancy1}>
                  <div className={body.stroke1}></div>
                  <span className={body.fancy_text1}>
                    Get started with Chipper Cash
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default Body;
