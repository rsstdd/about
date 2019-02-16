import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "../styles/main.scss";

const Header = ({ siteTitle }) => {
  let stylesStr;

  if (process.env.NODE_ENV === `production`) {
    try {
      stylesStr = require(`!raw-loader!../public/styles.css`);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }

  let css;
  if (process.env.NODE_ENV === `production`) {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    );
  }

  return (
    <header
      style={{
        background: `#91c84a`,
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      {css}
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
