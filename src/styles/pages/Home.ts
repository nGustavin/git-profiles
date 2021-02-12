import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  > .input-border {
    width: 300px;
    height: 30px;
    background: none;
    border: none;

    :hover {
      box-shadow: 0px 0px 0px 2px blue;
    }

    > input {
      width: 100%;
      height: 100%;
    }
  }
`

export const Card = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Header = styled.div`
  gap: 50px;
  display: flex;
  padding-top: 50px;

  > img {
    width: 200px;
    border-radius: 100px;
    box-shadow: 0px 0px 0px 2px white;
  }
`
export const ProfileHead = styled.div``
export const ProfileInfo = styled.div``

// ${props => props.theme.colors.primary};
