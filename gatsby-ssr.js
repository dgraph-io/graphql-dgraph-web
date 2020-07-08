import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { useMDXScope } from "gatsby-plugin-mdx/context"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import prismTheme from "prism-react-renderer/themes/nightOwl"
import Highlight, { defaultProps } from "prism-react-renderer"
import { copyToClipboard } from "./src/utils/copy-to-clipboard"
import GlobalContextProvider from "./src/context/GlobalContextProvider"

const LiveCode = props => {
  const components = useMDXScope()
  return (
    <LiveProvider
      code={props.children.props.children.trim()}
      scope={components}
    >
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}

const SyntaxHighlighter = props => {
  const handleClick = () => {
    copyToClipboard(props.children.props.children.trim())
  }

  const className = props.children.props.className || ""
  const matches = className.match(/language-(?<lang>.*)/)
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          <button
            onClick={handleClick}
            style={{
              position: "relative",
              border: "0px",
              borderRadius: "3px",
              float: "right"
            }}
          >
            Copy
          </button>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

const components = {
  pre: props => {
    if (props.children.props["react-live"]) {
      return <LiveCode {...props} />
    } else {
      return <SyntaxHighlighter {...props} />
    }
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <MDXProvider components={components}>{element}</MDXProvider>
    </GlobalContextProvider>
  )
}
