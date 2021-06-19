import styled from 'styled-components'

const Image = styled.img`
    width: ${props => props.fullScreen || props.fullWidth ? "100%" : props.width ? props.width : "auto"};
    height: ${props => props.fullScreen || props.fullHeight ? "100%" : props.height ? props.height : "auto"};

    margin-left: ${props => props.marginLeft ? props.marginLeft : 0};
    margin-right: ${props => props.marginRight ? props.marginRight : 0};
    margin-top: ${props => props.marginTop ? props.marginTop : 0};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0};

    opacity: ${props => props.opacity ? props.opacity : 1};
    vertical-align: ${props => props.verticalAlign ? props.verticalAlign : "inherit"};
`

export default Image;
