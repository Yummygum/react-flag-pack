import * as React from 'react'
import './Flag.scss'
import { imageUrl, isoToCountryCode } from 'flagpack-core'
import { Props } from './types'

class Flag extends React.PureComponent<Props, void> {
  public render() {
    const {
      code = 'NL',
      size = 'l',
      gradient = '',
      hasBorder = true,
      hasDropShadow = false,
      hasBorderRadius = true,
      className
    } = this.props

    const url = imageUrl(isoToCountryCode(code).toUpperCase(), size.toLowerCase())

    return (
      <div
        className={
          `flag
          ${gradient}
          size-${size}
          ${hasBorder ? 'border' : ''}
          ${hasDropShadow ? 'drop-shadow' : ''}
          ${hasBorderRadius ? 'border-radius' : ''}
          ${className ? className.replace(/\s\s+/g, ' ').trim() : ''}`
        }>
        <img src={url.default || url }/>
      </div>
    )
  }
}

export default Flag
