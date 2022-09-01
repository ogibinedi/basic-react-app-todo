import React from 'react';

const Header = ({title}) => {
  return (
    <header>
        <section>
            <h2>{title}</h2>
        </section>
    </header>
  );
};

Header.defaultProps = {
    title: "Default Title"
}

export default Header;