import React, { Component } from 'react'
import { FooterContainer } from './styled_components/FooterStyles'

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <footer className="footer">
          <div>
            <div class="text-center">© 2019 Copyright:
      <a href="https://nedmorgan.github.io/"> Ned Morgan</a>
            </div>
          </div>
        </footer>
      </FooterContainer>
    )
  }
}
