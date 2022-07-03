import React from 'react';
import Header from '../../organisms/Header';
import ContactForm from '../../organisms/ContactForm';
import SectionWithImage from '../../organisms/SectionWithImage';
import SectionData from '../../molecules/section-data';
import Footer from '../../organisms/Footer';
import { useNavigate } from 'react-router-dom';
import feature1 from './feature1.json';
import feature2 from './feature2.json';
import feature3 from './feature3.json';
import feature4 from './feature4.json';
import feature5 from './feature5.json';
import Text from '../../atoms/text';
import './style.scss';

function Features(props) {
  const navigate = useNavigate();
  const features = [feature1, feature2, feature3, feature4, feature5];

  const selectedFeature = features[props.feature - 1];

  return (
    <div>
      <Header transparent></Header>
      <div className='featureWrap'>
        <div className='featureHeaderContainer'>
          <SectionData
            header={selectedFeature.header.title}
            description={selectedFeature.header.description}
            button={
              selectedFeature.header.button
                ? {
                    label: selectedFeature.header.button.label,
                    onClick: () => {
                      navigate(selectedFeature.header.button.navigateTo);
                    },
                  }
                : null
            }
          />
        </div>
        <img className='featureImage' src={require('../../atoms/images/featureimage.png')} alt='not found'></img>
      </div>

      {selectedFeature.sections.map((data) => (
        <SectionWithImage image={<img src={require(`../../atoms/images/${data.img.src}`)} alt='not found' style={data.img.style ?? null} />} rtl={data.img.pos === 1} key={data.header}>
          <SectionData
            header={data.header}
            description={data.description}
            button={
              data.button
                ? {
                    label: data.button.label,
                    onClick: () => {
                      navigate(data.button.navigateTo);
                    },
                  }
                : null
            }
          />
        </SectionWithImage>
      ))}

      {selectedFeature.textSection ? <Text text={selectedFeature.textSection} /> : null}

      <ContactForm image={<img src={require('../../atoms/images/g10.png')} alt='not found' />}></ContactForm>
      <Footer />
    </div>
  );
}

export default Features;
