import React from "react"
import { Link } from "gatsby"

import arrow from "../images/arrow.svg"
import imgGirl from "../images/girl.webp"
import imgBoy from "../images/boy.webp"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the th burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Of disease caused</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behavior.</div>
                </div>
              </h1>
              <p>Better treats serious cardiometabolic diseases to transform lives and reduce healthcare utilization
              through the use of digital therapeutics.</p>
              <div className="btn-row">
                <button className="explore-button">
                  explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="arrow"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner">
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl"/>
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
