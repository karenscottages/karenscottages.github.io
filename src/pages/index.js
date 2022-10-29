import React from "react";
import Head from "next/head";
import { Card } from "../components/atoms/cards";
import { Heading } from "../components/pageElements/heading.jsx";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Karen's Cottages</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Heading />

      <section className="section intro">
        <div className="container">
          <div className="columns is-desktop mb-6">
            <div className="column is-6-desktop">
              <Card title="New Meadows">
                <Card.Content>
                  <div className="block">
                    New Meadows is a single storey cottage, ideal for couples
                    but will sleep up to 4. It offers a double bedroom along
                    with a living room with a double sofa bed. It is well
                    furnished with beautiful decor and has everything provided
                    including it's own patio in a large secluded garden with off
                    road parking.
                  </div>
                  <div className="block">
                    New Meadows is located in a quiet part of Pickering just 10
                    mins walk from the town centre.
                  </div>
                  <div className="block">
                    The cottage is located on a quiet road.
                  </div>
                </Card.Content>
              </Card>
            </div>
            <div className="column is-6-desktop">
              <Card title="Pickering">
                <Card.Content>
                  <div className="columns">
                    <div className="column ">
                      <figure className="image is-3by2">
                        <img
                          src="/photos/pickering/boat.jpg"
                          className="has-ratio"
                        />
                      </figure>
                    </div>
                    <div className="column is-two-thirds">
                      Pickering is a small market town ideally situated for the
                      North Yorkshire Moors & Steam Railway, Flamingoland, York,
                      Whitby, Scarborough and the Yorkshire Coast.
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </div>
          <div className="columns is-multiline is-justify-content-center">
          <div className="column is-full">
            <h1 className="title">New Meadows</h1>
          </div>
          <div className="column is-3-desktop is-6-tablet">
              <div className="intro-item mb-5 mb-lg-0">
                <img
                  src="/photos/newMeadows/newmeadows1.jpg"
                  alt=""
                  className=" w-100"
                />
                <p>
                  New Meadows is a single storey cottage, ideal for couples but
                  will sleep up to 4.
                </p>
              </div>
            </div>
            <div className="column is-3-desktop is-6-tablet">
              <div className="intro-item mb-5 mb-lg-0">
                <img
                  src="/photos/newMeadows/newmeadows2.jpg"
                  alt=""
                  className=" w-100"
                />
                <p> It is well furnished with beautiful decor and has everything provided. </p>
              </div>
            </div>
            <div className="column is-3-desktop is-6-tablet">
              <div className="intro-item mb-5 mb-lg-0">
                <img
                  src="/photos/newMeadows/newmeadows3.jpg"
                  alt=""
                  className=" w-100"
                />
                <p>It has it's own patio in a large secluded garden
                  with off road parking.</p>
              </div>
            </div>
            <div className="column is-3-desktop is-6-tablet">
              <div className="intro-item mb-5 mb-lg-0">
                <img
                  src="/photos/newMeadows/newmeadows4.jpg"
                  alt=""
                  className=" w-100"
                />
                <p>
                New Meadows is located on a quiet road just 10 mins walk from Pickering town centre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Karen's Cottages</strong>
            <span className="pl-1">
              Beautiful Holiday Homes in Pickering, North Yorkshire.
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
