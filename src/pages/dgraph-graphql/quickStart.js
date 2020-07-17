import React, { useState } from "react"
import { IconContext } from "react-icons"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import "../../assets/style/custom.scss"
import { Button, Carousel } from "react-bootstrap"
import { quickStartConstants } from "../../utils/graphQLConstants/quick-start-constants"

export default function QuickStart() {
  const [currentIndex, setIndex] = useState(0)

  return (
    <div className="code-editor-wrapper">
      <div className="editor-heading">
        <div className="heading-text">
          Step {currentIndex + 1}
          {currentIndex<(quickStartConstants.length - 1)&&<Button
            bsPrefix="next-button"
            onClick={() => {
              currentIndex == quickStartConstants.length - 1
                ? setIndex(currentIndex)
                : setIndex(currentIndex + 1)
            }}
          >
            <span>Next</span>
            <IconContext.Provider value={{ color: "#B7B7B7" }}>
              <MdChevronRight viewBox="0 0 12 20" />
            </IconContext.Provider>
            <MdChevronRight viewBox="7 0 20 20" />
          </Button>}
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
      </div>
      <Carousel activeIndex={currentIndex}>
        {quickStartConstants.map(customComponent => {
          return <Carousel.Item>{customComponent}</Carousel.Item>
        })}
      </Carousel>
    </div>
  )
}
