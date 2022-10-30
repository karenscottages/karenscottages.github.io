
const titleStyle = {
  font: "800 40px 'Helvetica'",
  color: "black",
  letterSpacing: "4px",
  WebkitTextFillColor: "white",
  WebkitTextStroke: "2px"
};

const ValuePair = ({title, children}) => <div className="mb-1">
  <span className="mr-2">{title}:</span>	
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
          <ValuePair title="Telephone">01751 473258</ValuePair>
            <ValuePair title="Email">
              <a href="mailto:hill66@talktalk.net?Subject=Karen's Cottages Availability.">hill66@talktalk.net</a>
            </ValuePair>
            <ValuePair title="Website"><a href="http://www.karenscottages.co.uk">karenscottages.co.uk</a></ValuePair>
            <ValuePair title="Price Guide">From £300 per week - Please call</ValuePair>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
