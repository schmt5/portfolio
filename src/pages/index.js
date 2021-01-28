import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from 'react-spring'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ParallaxCard from "../components/parallaxCard";
import AboutTeaser from "../components/aboutTeaser";
import ProjectTeaser from "../components/projectTeaser";
import Section from "../components/section";
import Divider from "../components/divider";
import Footer from "../components/footer";

const IndexPage = () => (
  <Layout className>
    <SEO title="Home" />
    <Section backgroundTheme="dark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16 md:h-screen">
        <div className="mb-12">
          <h1 className="text-base m-0">Thierry Schmidt</h1>
          <h2 className="text-4xl m-0">My Passion</h2>
        </div>
        <ParallaxCard />
      </div>
    </Section>
    <Divider position="end" />
    <Section>
      <AboutTeaser />
      <ProjectTeaser />
    </Section>
    <Divider position="start" />
    <Section backgroundTheme="dark">
      <Footer />
    </Section>

  </Layout>
)

export default IndexPage
