import React, { useState } from "react"
import GraphiQLWrapper from "../../components/GraphiQL"
import { IconContext } from "react-icons"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import "../../assets/style/custom.scss"
import { Button, Carousel } from "react-bootstrap"


export default function CodeEditor() {
  const [currentIndex, setIndex] = useState(0)

  return (
    <div className="code-editor-wrapper">
      <div className="editor-heading">
        <div className="heading-text">
          Step {currentIndex + 1}
          <Button
            bsPrefix="next-button"
            onClick={() => {
              currentIndex == 1
                ? setIndex(currentIndex)
                : setIndex(currentIndex + 1)
            }}
          >
            <span>Next</span>
            <IconContext.Provider value={{ color: "#B7B7B7" }}>
              <MdChevronRight viewBox="0 0 12 20" />
            </IconContext.Provider>
            <MdChevronRight viewBox="7 0 20 20" />
          </Button>
          {currentIndex == 1 && <Button
            bsPrefix="prev-button"
            onClick={() => {
                setIndex(currentIndex-1);
            }}
          >
            <IconContext.Provider value={{ color: "#B7B7B7" }}>
              <MdChevronLeft viewBox="0 0 12 20" />
            </IconContext.Provider>
            <MdChevronLeft viewBox="7 0 20 20" />
            <span>Back</span>
          </Button>}
        </div>
        <div className="subheading-text">
          It's a one-liner to bring up Dgraph with GraphQL.<i> Note: The Dgraph
          standalone image is great for quick start and exploring, but it's not
          meant for production use. Once you want to build an App or persist
          your data for restarts, you'll need to review the <u> admin docs</u></i>.
        </div>
      </div>
      <Carousel activeIndex={currentIndex}>
        <Carousel.Item>
          <GraphiQLWrapper />
        </Carousel.Item>
        <Carousel.Item>
          <GraphiQLWrapper />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
