/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Wrap from "../layouts/wrap";
import { StaticQuery, graphql } from "gatsby";
import { Component } from "react";

import PageBg from "../assets/images/bgs/work.svg";
import WorkThumbnail from "../components/work-thumbnail";

export default class WorkPage extends Component {
  render = () => {
    return (
      <StaticQuery
        query={graphql`
          {
            allSanityWork(sort: { order: DESC, fields: publishedAt }) {
              edges {
                node {
                  slug {
                    current
                  }
                  title
                  category {
                    title
                    id
                  }
                  color {
                    hex
                  }
                  subTitle
                  thumbnail {
                    asset {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(layout: FIXED, height: 300)
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allSanityWork }) => {
          const workItems = allSanityWork.edges.map(({ node }) => node);
          return (
            <Wrap
              lightsOn
              isWorkPage
              pageBg={<PageBg />}
              title="Work - Chandu J S"
              description="Here is the listing of some of my work."
            >
              <div className="content-wrap">
                <div className="h1 font-weight-bold mb-3">
                  My <span className="high">Work</span>
                  <span className="blinker">.</span>
                  <br />
                </div>
                <div
                  className="h5 mb-4 pb-4"
                  css={css`
                    line-height: 1.6;
                  `}
                >
                  I am a lover of anything and everything technology. <br />
                  But when I am not kicking{" "}
                  <span role="img" aria-label="ass">
                    ????
                  </span>{" "}
                  with my keyboard, I make photos.
                </div>
                <div
                  className="row"
                  css={css`
                    @media screen and (max-width: 766px) {
                      margin-left: -2rem;
                      margin-right: -2rem;
                    }
                  `}
                >
                  {workItems.map((item, index) => (
                    <WorkThumbnail key={index} data={item} />
                  ))}
                </div>
              </div>
            </Wrap>
          );
        }}
      />
    );
  };
}
