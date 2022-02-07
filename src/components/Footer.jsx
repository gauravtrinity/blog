import React from "react";
import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";

import LogoFooter from "../assets/images/logo.png";

import Youtube from "../assets/images/youtube.png";
import Fb from "../assets/images/fb.png";
import twitter from "../assets/images/instagram.png";
import FDivider from "../assets/icons/FDivider";

const Footer = () => {
  return (
    <>
      <section className="footer overflow-hidden">
        <Container className="py-5 tp-footer">
          <Row className="justify-content-center">
            <Col
              xs={7}
              className="d-flex flex-wrap justify-content-center gap-5"
            >
              <div className="reg d-flex flex-wrap justify-content-center align-items-center gap-5">
                <p className="text-white fw-bold text-uppercase m-0">
                  WISH TO PARTNER WITH US ?
                </p>
                <Button
                  variant="outlined"
                  className="border border-2 border-secondary text-white"
                >
                  Register Now
                </Button>
              </div>
              <div className="sign d-flex flex-wrap justify-content-center align-items-center gap-5">
                <p className="text-white text-uppercase m-0 fw-bold">
                  Existing user ?
                </p>
                <Button
                  variant="outlined"
                  className="border border-2 border-secondary text-white"
                >
                  Sign In
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <hr className="bg-white border-2 opacity-100 bg-opacity-100" /> */}

        <Container className="logo-footer p-0" fluid>
          <Row>
            <Col
              md={12}
              xs={12}
              className="text-center d-flex align-items-center gap-5"
            >
              <FDivider />
              <img src={LogoFooter} alt="" width="126" height="45" />
              <FDivider />
            </Col>
          </Row>
        </Container>
        <Container className="bt-footer">
          <Row className="justify-content-center">
            <Col
              xxl={3}
              lg={4}
              md={3}
              xs={12}
              className="text-center d-flex gap-5 align-items-center pb-3"
            >
              <p className="text-white m-0">
                <a href="/" className="text-white text-decoration-none">
                  <i className="fa fa-copyright" aria-hidden="true" />@
                  {new Date().getFullYear()} BLOGGER
                </a>
              </p>
              <ListGroup horizontal className="bg-transparent gap-3">
                <ListGroupItem className="bg-transparent p-0">
                  <a
                    href="https://www.youtube.com/channel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Youtube} alt="" className="img-fluid" />
                  </a>
                </ListGroupItem>
                <ListGroupItem className="bg-transparent p-0">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Fb} alt="" className="img-fluid" />
                  </a>
                </ListGroupItem>
                <ListGroupItem className="bg-transparent p-0">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter} alt="" className="img-fluid" />
                  </a>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={3} xs={12} className="text-center">
              <p className="mb-3 text-white">
                Terms of Service |{" "}
                <a href="/" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
