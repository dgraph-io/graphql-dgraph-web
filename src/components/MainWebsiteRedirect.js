import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { MdChevronLeft } from "react-icons/md"
import { IconContext } from "react-icons"
import {Button} from 'react-bootstrap'

export default function BackButtonMainWebsite() {
  const BackIcon = () => {
    return (
      <>
        <IconContext.Provider value={{ color: "#B7B7B7" }}>
          <MdChevronLeft viewBox="0 0 12 20" />
        </IconContext.Provider>
        <MdChevronLeft viewBox="7 0 20 20" />
      </>
    )
  }

  return (
    <div className="back-button-main-website">
      <Button
        as="a"
        href="https://dgraph.io/"
        bsPrefix="navigate-main-website-button ml-auto"
      >
        <BackIcon />
        Back to Main Website
      </Button>
    </div>
  )
}
