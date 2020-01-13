import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`

export const Container = styled.div`
  flex: 1;
  position: absolute;
  z-index: var(--topbar-z);
  top: 0;
  bottom: 0;
  right: 0;
  left: ${props => (props.isSidebarOpen ? '300px' : '0')};
  transition: left 0.3s ease-out;
`

export const Content = styled.div`
  padding: 16px;
`
