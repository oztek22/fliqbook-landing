import React, { Component } from 'react';
import ContactForm from '../../organisms/ContactForm';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';

class Contact extends Component {
  render() {
    return (
      <div>
        <Header></Header>
      <ContactForm image={<img src={require('../../atoms/images/g10.png')} alt='not found' />}></ContactForm>
      <Footer />
      </div>
    );
  }
}

export default Contact;
