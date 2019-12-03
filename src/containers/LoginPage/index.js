import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { loginRequest } from '../../store/auth/actions'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Logo = styled.div`
  width: 80px;
  height: 80px;
  background: black;
  border-radius: 50%;
`

const LogoLabel = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  margin-top: 24px;
  margin-bottom: 24px;
`

const LogoDivider = styled.hr`
  height: 1px;
  background: black;
  margin-bottom: 32px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
`
const Input = styled.input`
  display: block;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 8px 12px;
  width: 100%;
  font-size: 14px;
`

const Link = styled.label`
  margin-left: auto;
  font-size: 12px;
  color: #00b4a5;
  margin-top: 8px;
`

const Button = styled.button`
  background: #00b4a5;
  margin-left: auto;
  width: 128px;
  color: white;
  padding: 12px;
`

class LoginPage extends Component {
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
          <Button type="submit">Log In</Button>
        </Form>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {}
}
function mapDispatchToProps(dispatch) {
  return { submit: data => dispatch(loginRequest(data)) }
}

LoginPage.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
