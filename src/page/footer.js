import React from 'react';
import { CDBContainer, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

const Footer = () => {
  return (
    <div class = "shadow">
    <CDBContainer>
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
      >
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
