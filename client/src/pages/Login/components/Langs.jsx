import styled from "styled-components";

const Langs = styled.ul`
  display: none;
`

const Languages = () => {
  return (
    <div>
      <button>Uz</button>
      <Langs>
        <li>
          <button>Uz</button>
        </li>
        <li>
          <button>En</button>
        </li>
        <li>
          <button>Ru</button>
        </li>
      </Langs>
    </div>
  )
}

export default Languages;