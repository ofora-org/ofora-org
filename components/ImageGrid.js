import React from 'react'

import ImageGridItem from './ImageGridItem'

export default class ImageGrid extends React.Component {
  render () {
    if (!this.props.items) return null
    return (
      <div>
        {this.renderItems()}
        <div className='image-grid-item' />
        <div className='image-grid-item' />
        <div className='image-grid-item' />
        <style jsx>{`
          div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
        `}</style>
      </div>
    )
  }

  renderItems = () => this.props.items.map((item) => {
    if (!this.props.category) {
      return <ImageGridItem {...item} />
    }
    if (!item.data.category.data) return false
    if (this.props.category == item.data.category.data.name[0].text) {
      return <ImageGridItem {...item} />
    }
  })
}
