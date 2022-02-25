import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.div`
  margin-top: 20px;
  padding: 5px 10px;
`

export const Input = styled.div`
  margin-top: 50px;
  text-align: center;
  input,
  button {
    padding: 20px 20px;
    border: none;
    outline: none;
    font-size: 20px;
  }
  input {
    width: 500px;
    border-radius: 80px 0 0 0;;
  }
  button {
    background-color: #3e4045;
    color: #ffffff;
    border-radius: 0 0 80px 0;
  }
  button:hover {
    background: ${shade(0.1, '#e1e391')};
  }
`

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 60px;
  margin-bottom: 20px;
`

export const Box2 = styled.div`
  .box{
    background-color: #323845;
    border-radius: 10px;
  }
  h2{
    color: #ffff;
  }
  .nome{
    text-align: center;
    color: #1500ff;
  }
  #habilidade{
    text-align: center;
    color: #e3e87b;
    margin-bottom: 10px;
  }
  img {
    width: 300px;
    height: 300px;
    padding: 10px;
  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 15px;
  font-weight: 700;
`