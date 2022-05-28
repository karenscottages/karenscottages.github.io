import React from "react"
import Head from "next/head";
import { Card } from '../components/atoms/cards'

const Index = () => {
  return <div>
  <Head>
    <title>Karen's Cottages</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>

  <section className="hero is-small is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title"> Karen's Cottages </h1>
        <h2 className="subtitle"> Beautiful Holiday Homes in Pickering, North Yorkshire. </h2>
      </div>
   </div>
  </section>

  <section className = "section">
    <Card title="New Meadows">
      <Card.Content>
        <div className='block'>
          New Meadows is a single storey cottage, ideal for couples but will sleep up to 4. It offers a double bedroom along with a living room with a double sofa bed.
          It is well furnished with beautiful decor and has everything provided including it's own patio in a large secluded garden with off road parking.        
        </div>
        <div className='block'>
          New Meadows is located in a quiet part of Pickering just 10 mins walk from the town centre. 
        </div>
        <div className='block'>
          The cottage is located on a quiet road.
        </div>
      </Card.Content>
    </Card>

    <Card title="Pickering">
      <Card.Content>
        Pickering is a small market town ideally situated for the North Yorkshire Moors & Steam Railway, 
        Flamingoland, York, Whitby, Scarborough and the Yorkshire Coast.
      </Card.Content>
    </Card>

    </section>

    <footer className="footer">
      <div className="content has-text-centered">
      <p>
        <strong>Karen's Cottages</strong> 
        <span className='pl-1'>Beautiful Holiday Homes in Pickering, North Yorkshire.</span>
      </p>
    </div>
    </footer>
  </div>
}

export default Index