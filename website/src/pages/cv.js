import React from "react"

import SEO from "../components/seo"

import cvStyles from './cv.module.css'

const CVPage = () => (
  <div className={cvStyles.wrapper}>
    <SEO title="CV" />
    <h1>CV</h1>
  </div>
)

export default CVPage