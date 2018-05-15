import React from 'react'
import P from '~/components/base/Paragraph'
export default class Quote extends React.Component {
  render () {
    const { style, quote, source } = this.props
    const sourceText = source.length && source[0].text
    return (
      <P style={{...style, ...wrapperStyle}}>
        <div className='root'>
          <div style={quoteStyle}>{quote[0].text}</div>
          {sourceText ? <div className='source' style={sourceStyle}>{sourceText}</div> : null}
        </div>
        <style jsx>{`
          @media only screen and (min-width: 752px) {
            .root {
              padding-left: 150px
            }
            .source {
              padding-left: 65px;
            }
          }
        `}</style>
      </P>
    )
  }
}

const wrapperStyle = {
  margin: '60px auto'
}
const quoteStyle = {
  fontSize: 24,
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600
}

const sourceStyle = {
  fontSize: 13,
  fontFamily: 'IntervalBook, monospace',
  marginTop: 26,
  lineHeight: '1.3em'
}
