import React from "react";

const CardHeader = ({ className = "", title, children }) =>
    <header className={`card-header ${className}`}>
        <div className="columns" style={{width: "100%"}}>
            {title && <div className="column">
                <p className="card-header-title"> {title} </p>
            </div>}
            {children && <div className="column is-narrow">
                <div className="card-header-icon">
                    {children}
                </div>
            </div>}
        </div>
    </header>;

const CardContent = ({ className = "", children }) =>
    <div className={`card-content ${className}`}>
        {children}
    </div>;

const CardFooterItem = ({ className = "", children }) =>
    <div className={`card-footer-item ${className}`}>
        {children}
    </div>;

const CardFooter = ({ className = "", children }) =>
    <footer className={`card-footer ${className}`}>
        {children}
    </footer>;

CardFooter.Item = CardFooterItem;

const Card = ({ className = "", children, title }) => 
    <div className={`card ${className}`}>
      {title && <CardHeader title={title} />}
      {children}
    </div>;

Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Header = CardHeader;
export { Card };