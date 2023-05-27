import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  padding: 50px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px
  color: #35469c
  font-weight: bold
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  font-family: 'Open Sans';
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #5a7184;
  font-weight: 500;
  margin-top: 10px;
`

export const InputEle = styled.input`
  border: 2px solid #d7dfe9;
  color: #5a7184;
  font-family: 'Roboto';
  padding: 7px;
  margin-top: 5px;
  border-radius: 5px;
`
export const CustomSelect = styled.select`
  border: 2px solid #d7dfe9;
  color: #5a7184;
  font-family: 'Roboto';
  padding: 7px;
  margin-top: 5px;
  border-radius: 5px;
`
export const CustomOption = styled.option`
  color: #5a7184;
  font-family: 'Roboto';
  font-size: 15px;
`
export const Button = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 10px;
  margin-top: 10px;
  border: none;
  width: 100px;
  border-radius: 7px;
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.bgImage});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  background-size: cover;
  padding: 20px;
  margin-left: 20px;
`
