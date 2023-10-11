import React from 'react';
import { CDBContainer, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

const Footer = () => {
  return (
    <CDBContainer className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '100%' }}
      >
        <CDBBox>
          <small className="ms-2">&copy; 2023 Harshith Harijeevan. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="light" className="p-2" href = 'https://www.linkedin.com/in/harshith-harijeevan-ba796616b/'>
            <CDBIcon fab icon="linkedin" />
          </CDBBtn>
          <CDBBtn flat color="light" className="mx-3 p-2" href = 'https://github.com/HarshithAlva6'>
            <CDBIcon fab icon="github" />
          </CDBBtn>
          <CDBBtn flat color="light" className="p-2" href='https://www.instagram.com/harsh_alva/'>
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBContainer>
  );
};

export default Footer;
