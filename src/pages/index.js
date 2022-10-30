import React from "react";
import Head from "next/head";
import { Card } from "../components/atoms/cards";
import { Heading } from "../components/pageElements/heading";
import { CaptionedImage } from "../components/pageElements/captionedImage";

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
            <CaptionedImage url="/photos/newMeadows/newmeadows1.jpg">
              New Meadows is a single storey cottage, ideal for couples but will
              sleep up to 4.
            </CaptionedImage>

            <CaptionedImage url="/photos/newMeadows/newmeadows2.jpg">
              It is well furnished with beautiful decor and has everything
              provided.
            </CaptionedImage>

            <CaptionedImage url="/photos/newMeadows/newmeadows3.jpg">
              It has it's own patio in a large secluded garden with off road
              parking.
            </CaptionedImage>

            <CaptionedImage url="/photos/newMeadows/newmeadows4.jpg">
              New Meadows is located on a quiet road just 10 mins walk from
              Pickering town centre.
            </CaptionedImage>
          </div>

          <div className="columns is-multiline is-justify-content-center">
            <div className="block">
              Ten minutes from the centre of Pickering, New Meadows Cottage is
              our homely one-bedroomed holiday cottage offering beautiful
              accommodation with a private garden, close to top local
              attractions including Flamingo Land and Pickering Castle.
              Furnished to a high standard for a home-from-home stay, our
              cottage is within walking distance of shops, pubs and restaurants.
              Book a stay with us to be just moments from the North York Moors,
              with the Scarborough coast just a half-hour drive from your door.
              Other nearby attractions include the Beck Isle Museum of Rural
              Life, Dalby Forest, Go Ape! and the Ryedale Folk Museum.
            </div>

            <div className="block">
              New Meadows Cottage has a beautiful living room with a dining
              table for four, TV, DVD player and patio doors leading out to the
              well-maintained landscape garden. There's a spacious double
              bedroom with a comfortable bed, and the fitted kitchen includes a
              cooker, microwave, kettle and toaster amongst other essential
              appliances. We've provided plenty of storage space throughout, and
              the cottage has a modern, stylish ensuite with a large shower
              cubicle.
            </div>
            <div className="block">
                New Meadows Cottage is seperate from but adjoins our family home,
              so it has the added benefit of security for those who don't wish
             to be too secluded.
            </div>
            <div className="block">
              <h4>Price Guide</h4>
              <p>From £300 per week - Please call</p>
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
