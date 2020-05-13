import React, {useRef, useEffect} from "react"
import { Link } from "gatsby"
import { TweenMax, TimelineLite, Power3 } from 'gsap'

//Assets
import arrow from "../images/arrow.svg"
import imgGirl from "../images/girl.webp"
import imgBoy from "../images/boy.webp"

//Components
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



const IndexPage = () => {

  let app = useRef(null);
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({delay: .8});

  useEffect(() => {
    //Images Vars
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    //Content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];


    //Removing the initial Flash
    TweenMax.to(app, 0, { css: { visibility: 'visible' }})

    //Images Animation
    tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut}, 'Start')
    .from(girlImage.firstElementChild, 2, {scale: 1.6, ease:Power3.easeOut}, .2)
    .from(boyImage, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
    .from(boyImage.firstElementChild, 2, {scale: 1.6, ease:Power3.easeOut}, .2)

    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
      y: 44,
      ease: Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y:20, opacity:0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y:20, opacity:0, ease: Power3.easeOut}, 1.6)
  }, [tl])

  return (
    <Layout>
      <div className="hero" ref={el => app = el}>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-content-inner" ref={el => content = el}>
                <h1>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">
                      Relieving the th burden
                    </div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">
                      Of disease caused
                    </div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">by behavior.</div>
                  </div>
                </h1>
                <p>
                  Better treats serious cardiometabolic diseases to transform
                  lives and reduce healthcare utilization through the use of
                  digital therapeutics.
                </p>
                <div className="btn-row">
                  <button className="explore-button">
                    explore
                    <div className="arrow-icon">
                      <img src={arrow} alt="arrow" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="hero-images">
              <div className="hero-images-inner" ref={el => images = el}>
                <div className="hero-image girl">
                  <img src={imgGirl} alt="girl" />
                </div>
                <div className="hero-image boy">
                  <img src={imgBoy} alt="boy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
