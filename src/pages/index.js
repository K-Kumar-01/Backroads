import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default function Home() {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt autem quos voluptas exercitationem doloribus, neque atque illo quas commodi provident maxime! Vero eaque illo expedita itaque odit ipsum. Ipsum, quod."
        >
          <Link to="/tours" className="btn-white">
            Explore tours
          </Link>
        </Banner>
      </SimpleHero>
      <About/>
      <Services/>
    </Layout>
  )
}
