/** @format */

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

import logo from "../media/images/Shopy-logo.png";

import "../styles/footer.css";

function Footer() {
  return (
    <>
      <MDBFooter
        bgColor='light'
        className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          {/* <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon='facebook-f' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon='twitter' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon='google' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon='instagram' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon='linkedin' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon='github' />
            </a>
          </div> */}
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  {/* <MDBIcon icon='gem' className='me-3' /> */}
                  <img className='logo' src={logo} alt='logo' />
                </h6>
                <p>
                  From our humble beginnings as a small discount retailer in Tel
                  Aviv, Shopy has opened thousands of stores in the Country and
                  expanded internationally.
                </p>
              </MDBCol>

              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 footer-title'>
                  Products
                </h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Fruits
                  </a>
                </p>

                <p>
                  <a href='#!' className='text-reset'>
                    Grains
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Alochol
                  </a>
                </p>
              </MDBCol>

              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 footer-title'>
                  Useful links
                </h6>

                <p>
                  <a href='#!' className='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 footer-title'>
                  Contact
                </h6>
                <p>
                  <MDBIcon icon='home' className='me-2' />
                  Tel Aviv, Israel
                </p>
                <p>
                  <MDBIcon icon='envelope' className='me-3' />
                  contact@shopy.com
                </p>
                <p>
                  <MDBIcon icon='phone' className='me-3' /> 052 332 189 70
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className='text-center p-4'
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2022 Copyright:
          <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            Gyngee
          </a>
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;
