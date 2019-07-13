import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'
import styled, { css } from "styled-components";

const Example:React.SFC = () => {

  const Test = styled.div`
    color: Red;
  `

  return (
    <Layout>
      <Test>Styled Component</Test>
    </Layout>
  )
}

export default Example
