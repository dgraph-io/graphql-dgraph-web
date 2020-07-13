import React, { useState } from "react"
import GraphiQLWrapper from "../../components/GraphiQL"
import { IconContext } from "react-icons"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import "../../assets/style/custom.scss"
import { Button, Carousel } from "react-bootstrap"
import { editorConstants } from "../../utils/graphQLConstants/editorContants"

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
              currentIndex == 2
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
          {currentIndex >= 1 && (
            <Button
              bsPrefix="prev-button"
              onClick={() => {
                setIndex(currentIndex - 1)
              }}
            >
              <IconContext.Provider value={{ color: "#B7B7B7" }}>
                <MdChevronLeft viewBox="0 0 12 20" />
              </IconContext.Provider>
              <MdChevronLeft viewBox="7 0 20 20" />
              <span>Back</span>
            </Button>
          )}
        </div>
        <div className="subheading-text">
          {editorConstants[currentIndex]}
        </div>
      </div>
      <Carousel activeIndex={currentIndex}>
        {editorConstants.map(() => {
          return (
              <Carousel.Item>
                <GraphiQLWrapper />
              </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}
