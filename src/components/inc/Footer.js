import React from 'react';

const Footer = ({vendor, length}) => {
  const today = new Date();
  return (
    <footer>
        <section>
            <p>{length} List {length === 1 ? 'item' : 'items'}</p>
            <p>Copyright &copy; {today.getFullYear()} {vendor}</p>
        </section>
    </footer>
  );
};

export default Footer;