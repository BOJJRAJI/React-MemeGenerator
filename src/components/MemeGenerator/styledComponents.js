import styled from 'styled-components'

export const BgContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 50%;
  margin-right: 30px;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 20px;
    order: 2;
  }
`

export const Heading = styled.h1`
  font-size: 27px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #35469c;
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const LabelInputCon = styled.div`
  margin-top: 10px;
  width: 100%;
`

export const Label = styled.label`
  font-size: 14px;
  font-family: 'Roboto';
  color: #7e858e;
`

export const Input = styled.input`
  border: 1px solid #d7dfe9;
  padding: 10px;
  border-radius: 3px;
  margin-top: 5px;
  width: 100%;
`

export const Select = styled.select`
  border: 1px solid #d7dfe9;
  padding: 10px;
  width: 33%;
  border-radius: 3px;
  margin-top: 5px;
  width: 100%;
`

export const Option = styled.option`
  font-size: 13px;
`

export const Button = styled.button`
  border: none;
  background-color: #0b69ff;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 40%;
  padding: 10px;
  border-radius: 5px;
`
export const MemeContainer = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.url});
  height: 300px;
  background-size: cover;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 20px;
    order: 1;
  }
`

export const Text = styled.p`
  font-size: ${props => props.size}px;
  font-family: 900;
  font-weight: bold;
  color: #ffffff;
`
export const SmallDvHeading = styled.h1`
  font-size: 27px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #35469c;
  display: none;
  @media screen and (max-width: 576px) {
    display: flex;
  }
`
