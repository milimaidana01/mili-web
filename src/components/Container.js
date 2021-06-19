import styled from 'styled-components'

const Container = styled.div`
    width: ${props => props.fullScreen || props.fullWidth ? "100%" : props.width ? props.width : "auto"};
    height: ${props => props.fullScreen || props.fullHeight ? "100%" : props.height ? props.height : "auto"};

    background-color: ${props => props.color ? props.color : props.theme.secondaryColor ? props.theme.secondaryColor : "white"};
`

export default Container;
