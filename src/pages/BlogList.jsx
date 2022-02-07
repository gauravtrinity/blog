import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";

import { BlogCard } from "../components";
import useFetch from "../hooks/useFetch";

const BlogList = () => {
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch("", page);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "200px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <>
      <section className="bloglist min-vh-100">
        <h2 className="text-center m-3">BlogList Page</h2>

        <Container>
          <Row>
            {list?.map((post) => (
              <Col lg={6} md={6} xs={12} className="mb-5">
                <BlogCard
                  id={post.id}
                  key={post.id}
                  title={post.title}
                  body={post.body}
                />
              </Col>
            ))}
            {loading && <p>Fetching...</p>}
            {error && <p>Error!</p>}
            <div ref={loader} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogList;
