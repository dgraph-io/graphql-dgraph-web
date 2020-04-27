import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Carousel from 'react-bootstrap/Carousel';

const ImageSlider = (props) => (
 <StaticQuery
    query={graphql`
    query {
      allFile {
        edges {
          node {
            id
            relativeDirectory
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `}
  render= { data => (
    <Carousel className="full-width-md d-none d-md-block">
      {
        data.allFile.edges.map(pic => {
          if (pic.node.relativeDirectory === props.imgFolder) {
            return <Carousel.Item
              style={{ maxWidth: "100%", height: 400 }}
              key={pic.node.id}
            >
                <Img
                  className="d-block"
                  imgStyle={{
                    objectFit: "contain",
                    margin: "auto",
                    left: 0,
                    right: 0,
                    width: "auto",
                    height: "auto",
                  }}
                  fluid={pic.node.childImageSharp.fluid}
                />
            </Carousel.Item>
          }
          return null
        })
      }
    </Carousel>
  )}
    />
);

export default ImageSlider;