import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../organisms/Header';
import SectionWithImage from '../../organisms/SectionWithImage';
import SectionWithList from '../../organisms/SectionWithList';
import Book from '../../atoms/svg/book';
import Laptop from '../../atoms/svg/laptop';
import Logo from '../../atoms/svg/logo';
import './index.scss';
import ContactForm from '../../organisms/ContactForm';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header></Header>

      <SectionWithImage
        tagline='MAKE GST FILING FAST. SIMPLE. EASY'
        header='India’s first and only dedicated software for bookkeeping, accounting & GST filing for Amazon Sellers.'
        subheader='Perform accounting and GST filing using your Amazon MTR in just a few clicks. Accurate, fast and easy to use'
        button={{
          label: 'SIGNUP FOR A FREEE TRIAL',
          onClick: () => {
            navigate('/signup');
          },
        }}
        image={<img src={require('../../atoms/images/Group 4565.png')} alt='not found' style={{ marginTop: '-80px' }} />}
      ></SectionWithImage>

      <SectionWithList
        list={[
          { icon: <Logo />, title: 'Book Keeping', description: 'Flickbook helps you manage your documetns' },
          { icon: <Book />, title: 'Accounting', description: 'Flickbook helps you manage your documetns' },
          { icon: <Laptop />, title: 'GST Filing', description: 'Flickbook helps you manage your documetns' },
        ]}
      ></SectionWithList>

      <SectionWithImage
        header='Amazon MTR to GSTR1 in just a few clicks'
        description='Convert your Amazon MTR into GSTR1-ready .csv or .json file quickly and accurately. Our Shark and Whale plan users can even file gstr1 online directly from Amazon MTR using our software.'
        button={{
          label: 'Read More',
          onClick: () => {
            navigate('/features');
          },
        }}
        image={<img src={require('../../atoms/images/g10.png')} alt='not found' />}
        rtl={true}
      ></SectionWithImage>

      <SectionWithImage
        header='Amazon MTR to Tally, Vyapar, QuickBooks or Zoho'
        description='Already using some other accounting software for your business? Don’t worry. We’ve got you covered! You can convert your Amazon MTR into formats that can be easily imported inside all these softwares.'
        button={{
          label: 'Read More',
          onClick: () => {
            navigate('/features');
          },
        }}
        image={<img src={require('../../atoms/images/g10.png')} alt='not found' />}
        backgroundColor='#E6F5EA'
      ></SectionWithImage>

      <SectionWithImage
        header='Amazon MTR to Sales & Tax Analytics'
        description='flickbook converts your Amazon MTR into beautiful charts and summary tables to get a clear visualization of your monthly sales and taxes.'
        button={{
          label: 'Read More',
          onClick: () => {
            navigate('/features');
          },
        }}
        image={<img src={require('../../atoms/images/g10.png')} alt='not found' />}
        rtl={true}
      ></SectionWithImage>

      <SectionWithImage
        header='Automated Financial Statements and Profit Calculation'
        description='Flickbook calculates profits automatically using your Amazon MTR, purchase and expense data. It can even generate income statements, cash flow statements and balance sheets quickly and accurately.'
        button={{
          label: 'Read More',
          onClick: () => {
            navigate('/features');
          },
        }}
        image={<img src={require('../../atoms/images/g10.png')} alt='not found' />}
        backgroundColor='#E6F5EA'
      ></SectionWithImage>

      <SectionWithImage
        header='Analyze Returns, Reconcile Payments and Much More'
        description='Besides basic features like bookkeeping, accounting and GST filing flickbook also offers advanced features like returns analysis, Amazon payments reconciliation, recurring bill payments, automated salary payments etc.'
        button={{
          label: 'Read More',
          onClick: () => {
            navigate('/features');
          },
        }}
        image={<img src={require('../../atoms/images/g10.png')} alt='not found' />}
        rtl={true}
      ></SectionWithImage>

      <div className='section-text'>In Short, flickbook helps you to shift your focus from running your Amazon business to growing your Amazon business.</div>

      <ContactForm
        image={<img src={require('../../atoms/images/g10.png')} alt='not found' />}></ContactForm>
    </div>
  );
}

export default Home;
