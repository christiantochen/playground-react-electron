import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Logo = styled.div`
  width: 80px;
  height: 80px;
  background: black;
  border-radius: 50%;
`

export const LogoLabel = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  margin-top: 24px;
  margin-bottom: 24px;
`

export const LogoDivider = styled.hr`
  height: 1px;
  background: black;
  margin-bottom: 32px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
`
export const Input = styled.input`
  display: block;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 8px 12px;
  width: 100%;
  font-size: 14px;
`

export const Link = styled.label`
  margin-left: auto;
  font-size: 12px;
  color: #00b4a5;
  margin-top: 8px;
`

export const Button = styled.button.attrs({
  type: 'submit',
})`
  background: #00b4a5;
  margin-left: auto;
  width: 128px;
  color: white;
  padding: 12px;
`
