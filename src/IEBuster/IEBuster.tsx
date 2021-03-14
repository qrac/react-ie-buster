import React, { useState, useEffect } from "react"
import { IEBusterProps } from "../../types"

const IEBuster: React.FC<IEBusterProps> = ({
  appId = "ie-buster-app",
  mainText = "ご利用のインターネットブラウザは推奨環境ではありません。Webサイトの動作が保証できませんので、最新の Google Chrome をご利用ください。",
  linkText = "ダウンロードページへ",
  linkUrl = "https://www.google.com/chrome/",
  linkNewTab = true,
  appStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "16px",
    boxSizing: "border-box",
    zIndex: 999999,
  },
  cardStyles = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "886px",
    margin: "0 auto",
    padding: "16px",
    background: "#fff",
    boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.4)",
    boxSizing: "border-box",
    fontFamily: "SegoeUI, Meiryo, sans-serif",
  },
  textStyles = {
    flex: "1 0 0%",
    maxWidth: "100%",
    margin: 0,
    color: "#000",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  linkStyles = {
    flex: "none",
    display: "flex",
    margin: "0 0 0 16px",
    padding: "12px 24px",
    background: "#0078d4",
    boxSizing: "border-box",
    color: "#fff",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: 1,
    textAlign: "center",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
}) => {
  const [show, setShow] = useState(false)
  const edge = !linkUrl.indexOf("microsoft-edge")
  const tab = !edge && linkNewTab

  useEffect(() => {
    const isIE =
      (!!window.MSInputMethodContext && !!document.DOCUMENT_NODE) || false
    isIE && setShow(true)
  }, [])

  return (
    show && (
      <div id={appId} style={appStyles}>
        <div style={cardStyles}>
          <p style={textStyles}>{mainText}</p>
          <a
            style={linkStyles}
            href={linkUrl}
            target={tab ? "_blank" : undefined}
            rel={tab ? "noopener noreferrer" : undefined}
          >
            {linkText}
          </a>
        </div>
      </div>
    )
  )
}

export default IEBuster
