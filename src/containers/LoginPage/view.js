import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  Logo,
  LogoLabel,
  LogoDivider,
  Form,
  InputLabel,
  InputWrapper,
  Input,
  Link,
  Button,
} from './styles'

class LoginPageView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.submit(this.state)
  }

  render() {
    return (
      <Wrapper>
        <Logo />
        <LogoLabel>Mining Operation Collaboration Apps</LogoLabel>
        <LogoDivider />
        <Form onSubmit={this.handleSubmit}>
          <InputWrapper style={{ marginBottom: 28 }}>
            <InputLabel>Username</InputLabel>
            <Input
              placeholder="Enter your username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </InputWrapper>
          <InputWrapper style={{ marginBottom: 42 }}>
            <InputLabel>Password</InputLabel>
            <Input
              placeholder="Enter your Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <Link>Forgot Password ?</Link>
          </InputWrapper>
          <Button>Log In</Button>
        </Form>
      </Wrapper>
    )
  }
}

LoginPageView.propTypes = {
  submit: PropTypes.func.isRequired,
}

export default LoginPageView
