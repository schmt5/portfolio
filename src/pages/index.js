import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from 'react-spring'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ParallaxCard from "../components/parallaxCard";
import Teaser from "../components/teaser";
import Section from "../components/section";
import Divider from "../components/divider"

const IndexPage = () => (
  <Layout className>
    <SEO title="Home" />
    <Section backgroundTheme="dark">
      <div className="grid grid-cols-2 gap-4 pt-16 h-screen">
        <div>
          <h1 className="text-base m-0">Thierry Schmidt</h1>
          <h2 className="text-4xl m-0">My Passion</h2>
        </div>
        <ParallaxCard />
      </div>
    </Section>
    <Divider />
    <Section>
      <Teaser />
    </Section>

  </Layout>
)

export default IndexPage
