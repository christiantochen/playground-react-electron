import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  z-index: var(--sidebar-z);
  transition: transform 0.3s ease-out;
  transform: translateX(${props => (props.isOpen ? '0%' : '-100%')});
`

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 16px;
  height: 96px;
  background: #463191;
  align-items: center;
  z-index: 2;
  position: relative;
`

export const ProfilePicture = styled.div`
  height: 64px;
  width: 64px;
  background: white;
  border-radius: 50%;
`

export const HeaderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`
export const Title = styled.label`
  font-size: 16px;
  color: white;
  font-weight: bold;
`

export const SubTitle = styled.label`
  font-size: 14px;
  color: #ffffff60;
  font-weight: bold;
`

export const Content = styled.div`
  height: 100%;
  padding: 16px;
  transition: box-shadow 0.3s ease-out;
  box-shadow: ${props => (props.isOpen ? '1px 0px 8px #bfbfbf' : 'none')};
`
