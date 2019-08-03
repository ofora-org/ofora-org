import React from 'react';
import App, { Container } from 'next/app'
import Provider from '../components/base/Context'

class MainApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Provider>
          <Component {...pageProps} />
        </Provider>
        <style jsx global>{`
          ul li {
            margin-bottom: 1rem;
          }
        `}</style>
      </Container>
    )
  }
}

export default MainApp