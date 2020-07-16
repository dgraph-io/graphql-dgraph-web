import React from "react"
import "../../assets/style/custom.scss"
import { Link, navigate } from "gatsby"
import { Button } from "react-bootstrap"
import { FaArrowRight } from "react-icons/fa"
import { GlobalReducerContext } from "../../context/GlobalContextProvider"

export default function GetStarted() {
  const dispatch = React.useContext(GlobalReducerContext)
  return (
    <Button
      as="button"
      onClick={() => {
        navigate("/dgraph-graphql/quick-start")
        dispatch({ type: "HIDE_RIGHT_SIDEBAR", showSideBar: false })
      }}
      bsPrefix="button button--primary mr-0 mr-md-4"
    >
      <span>
        Get Started &nbsp;&nbsp;&nbsp;
        <FaArrowRight />
      </span>
    </Button>
  )
}
