import styled from 'styled-components'

const Text = styled.p`
    color: ${props => props.color ? props.color : props.theme.secondaryColor};
    font-size: ${props => props.huge ? "16em" : "1.2em"};

    margin: 0;
`

export default Text;
