import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from 'react-spring'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ParallaxCard from "../components/parallaxCard";

const IndexPage = () => (
  <Layout className>
    <SEO title="Home" />
    <div className="grid grid-cols-2 gap-4 mt-16 h-screen">
      <h1 className="text-center">Thierry Schmidt</h1>
      <ParallaxCard />
    </div>

  </Layout>
)

export default IndexPage
