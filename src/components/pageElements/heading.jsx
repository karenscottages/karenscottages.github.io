
const titleStyle = {
  font: "800 40px Helvetica",
  color: "black",
  letterSpacing: "4px",
  WebkitTextFillColor: "white",
};

const HeadingInfo = ({children}) => <div className="mb-1">
  <span>{children}</span>
</div>

export const Heading = () => <section className="hero is-small is-primary">
  <div className="hero-body">
    <div className="container">
      <div className="columns">
      <div className="column">
          <h1 className="title" style={titleStyle}> KAREN'S COTTAGES </h1>
          <h2 className="subtitle"> Beautiful Holiday Homes in Pickering, North Yorkshire. </h2>
        </div>
        <div className="column">
          <div className="contact">
            <HeadingInfo><a href="http://www.karenscottages.co.uk">karenscottages.co.uk</a></HeadingInfo>
            <HeadingInfo>01751 473258</HeadingInfo>
            <HeadingInfo>
              <a href="mailto:hill66@talktalk.net?Subject=Karen's Cottages Availability.">hill66@talktalk.net</a>
            </HeadingInfo>
            <HeadingInfo>From £300 per week - Please call</HeadingInfo>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
