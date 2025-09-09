import React from 'react';
import { CDBContainer, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

const Footer = () => {
  return (
    <div class = "shadow">
    <CDBContainer>
      <CDBBox
          className="flex flex-col md:flex-row md:justify-between items-center mx-auto py-4 space-y-4 md:space-y-0">
        <CDBBox>
          <small className="ms-2 mob">&copy; 2023 Harshith Harijeevan. All rights reserved.</small>
        </CDBBox>
        <CDBBox className="mob">
          <CDBBtn flat color="light" className="p-2" href='https://www.linkedin.com/in/harshith-harijeevan-ba796616b/' target='_blank' rel="noopener noreferrer">
            <CDBIcon fab icon="linkedin" />
          </CDBBtn>
  
          <CDBBtn flat color="light" className="mx-3 p-2" href='https://github.com/HarshithAlva6' target='_blank' rel="noopener noreferrer">
            <CDBIcon fab icon="github" />
          </CDBBtn>
  
          <CDBBtn flat color="light" className="p-2" href='https://www.instagram.com/harsh_alva/' target='_blank' rel="noopener noreferrer">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBContainer>
    </div>
  );
};

export default Footer;
