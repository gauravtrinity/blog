import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
} from "reactstrap";

import cardimg from "../assets/images/cardimg.jpg";

import APIService from "../service";

const BlogDetail = () => {
  let { id } = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPosts() {
    try {
      const res = await APIService.get(`/posts/${id}`);
      setPost(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section className="view-record min-vh-75 pt-5">
        <div className="banner-text mt-5"></div>
        <Container className="record-tabs">
          <Row className="justify-content-between">
            <Col lg={4} md={12} sm={12} xs={12}>
              <div className="recored-side">
                <CardImg
                  alt="Card image cap"
                  src={cardimg}
                  top
                  width="100%"
                  height="100%"
                  className=" m-4  "
                />
              </div>
            </Col>
            <Col lg={7} md={12} sm={12} xs={12}>
              <div className="view-record-main">
                <div className="mb-5">
                  <Nav tabs className="border-0">
                    <NavItem>
                      <NavLink className="text-black">information</NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="mt-4">
                    <Row>
                      <Col sm="12" className="overflow-hidden p-0">
                        <Card body className="p-0">
                          <CardTitle className="d-flex justify-content-between align-items-center px-4 pt-3"></CardTitle>
                          <hr className="my-3 opacity-0" />
                          <CardText className="px-4 pb-3">
                            <ListGroup>
                              <ListGroupItem>
                                <span>Title :</span>
                                {post?.title}
                              </ListGroupItem>
                              <ListGroupItem>
                                <span>Body :</span>
                                {post?.body}
                              </ListGroupItem>
                            </ListGroup>
                          </CardText>

                          <hr className="my-3 opacity-0" />
                          <div className="d-flex align-items-center justify-content-between gap-4 inner-radius">
                            <i className="bottom right" />
                            <i className="bottom left" />
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </TabContent>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogDetail;
