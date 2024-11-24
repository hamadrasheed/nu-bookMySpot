import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './company.css';

import AboutCompany from '../../components/aboutCompany/aboutCompany';
import Faq from '../../components/faq/faq';

const AboutSection = () => {
  return (
    <>
        <AboutCompany/>
        <Faq/>
    </>
  );
};

export default AboutSection;
