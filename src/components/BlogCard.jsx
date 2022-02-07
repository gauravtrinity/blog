import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardGroup,
  CardImg,
  CardBody,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

import cardimg from "../assets/images/cardimg.jpg";

const BlogCard = ({ title, body, id }) => {
  const navigate = useNavigate();

  function viewBlog(path) {
    navigate(`/blog-detail/${path}`);
  }

  return (
    <CardGroup
      onClick={() => viewBlog(id)}
      className="blogcard pointer h-100 w-100 shadow  "
    >
      <Card className="d-flex flex-row h-100 bg-black text-white ">
        <CardImg
          alt="Card image cap"
          src={cardimg}
          top
          width="50%"
          height="75%"
          className=" m-4 w-50 "
        />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>

          <CardText>{body}</CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default BlogCard;
