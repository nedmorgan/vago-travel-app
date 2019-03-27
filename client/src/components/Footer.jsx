import React, { Component } from 'react'
import { FooterContainer } from './styled_components/FooterStyles'

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <footer className="footer">
          <div>
            <div className="text-center">© 2019 Copyright:
      <a href="https://nedmorgan.github.io/" target="_blank" rel="noopener noreferrer"> Ned Morgan</a>
            </div>
          </div>
        </footer>
      </FooterContainer>
    )
  }
}
