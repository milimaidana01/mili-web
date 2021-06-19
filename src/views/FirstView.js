import React, { Component } from 'react'

import Typed from 'react-typed';

import Container from '../components/Container'
import Wrapper from '../components/Wrapper'
import Image from '../components/Image'
import Me from '../images/Me.png'
import Me2 from '../images/Me2.png'

const initialState = {
    typedConfig: {
        mili: {
            startDelay: 800,
            backDelay: 1600,
            typeSpeed: 40,
            backSpeed: 60,
            visibility: "visible",

            nPasses: -1,
            color: ["black", "primaryColor", "black"],

            strings: ["mili", "Programación", "Calidad"],
        },
        maidana: {
            startDelay: 1200,
            backDelay: 1900,
            typeSpeed: 45,
            backSpeed: 80,

            nPasses: -1,
            color: ["secondaryColor", "white", "gold"],
            strings: ["maidana", "Diseño", "Soluciones"]
        }
    },
    proportions: {
        top: 40,
        bottom: 60
    },
    imageCircles: {
        opacity: 0,
    }
}

class FirstView extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.fixTypedColors(initialState);
    }

    fixTypedColors = (state) => {
        for (let i = 0; i < state.typedConfig.mili.color.length; i++) {
            switch (state.typedConfig.mili.color[i]) {
                case "primaryColor":
                    state.typedConfig.mili.color[i] = this.props.theme.primaryColor
                    break
                case "secondaryColor":
                    state.typedConfig.mili.color[i] = this.props.theme.secondaryColor
                    break
            }
        }
        for (let i = 0; i < state.typedConfig.maidana.color.length; i++) {
            switch (state.typedConfig.maidana.color[i]) {
                case "primaryColor":
                    state.typedConfig.maidana.color[i] = this.props.theme.primaryColor
                    break
                case "secondaryColor":
                    state.typedConfig.maidana.color[i] = this.props.theme.secondaryColor
                    break
            }
        }

        return state
    }

    miliStartWord = () => {
        let typedConfig = this.state.typedConfig
        typedConfig.mili.nPasses++
        this.setState({ typedConfig: typedConfig })
    }

    miliHide = () => {
        let typedConfig = this.state.typedConfig
        typedConfig.mili.visibility = "hidden"
        this.setState({ typedConfig: typedConfig })
    }

    maidanaStartWord = () => {
        let typedConfig = this.state.typedConfig
        typedConfig.maidana.nPasses++
        this.setState({ typedConfig: typedConfig })
    }

    maidanaFinishText = () => {
        setTimeout(() => {
            for (let i = 0; i < this.state.proportions.top * 2; i++) {
                setTimeout(() => {
                    this.setState({
                        imageCircles: this.state.imageCircles.opacity + 0.0125,
                        proportions: {
                            top: this.state.proportions.top - 0.5,
                            bottom: this.state.proportions.bottom + 0.5
                        }
                    })
                }, 30);
            }
        }, 2000);
    }

    render() {
        console.log(this.state)

        return (
            <Container fullScreen>
                <Container fullWidth height={this.state.proportions.top + "%"}>
                    <Container fullWidth height={"40%"} />
                    <Container fullWidth height={"60%"}>
                        <Wrapper color={this.state.typedConfig.mili.color[this.state.typedConfig.mili.nPasses]}>
                            <Typed
                                style={
                                    {
                                        fontFamily: "Staatliches",
                                        fontSize: "36em",
                                        marginLeft: "0.2em",
                                        visibility: this.state.typedConfig.mili.visibility
                                    }
                                }
                                strings={this.state.typedConfig.mili.strings}
                                typeSpeed={this.state.typedConfig.mili.typeSpeed}
                                backSpeed={this.state.typedConfig.mili.backSpeed}
                                startDelay={this.state.typedConfig.mili.startDelay}
                                backDelay={this.state.typedConfig.mili.backDelay}
                                showCursor={false}
                                loop={true}
                                loopCount={2}
                                preStringTyped={this.miliStartWord}
                                onLastStringBackspaced={this.miliHide}
                            />
                        </Wrapper>
                    </Container>
                </Container>
                <Container fullWidth height={this.state.proportions.bottom + "%"} color={this.props.theme.primaryColor}>
                    <Wrapper color={this.state.typedConfig.maidana.color[this.state.typedConfig.maidana.nPasses]}>
                        <Typed
                            style={
                                {
                                    fontFamily: "Staatliches",
                                    fontSize: "36em",
                                    marginLeft: "0.2em",
                                }
                            }
                            strings={this.state.typedConfig.maidana.strings}
                            typeSpeed={this.state.typedConfig.maidana.typeSpeed}
                            backSpeed={this.state.typedConfig.mili.backSpeed}
                            startDelay={this.state.typedConfig.maidana.startDelay}
                            backDelay={this.state.typedConfig.maidana.backDelay}
                            showCursor={false}
                            preStringTyped={this.maidanaStartWord}
                            onComplete={this.maidanaFinishText}
                        />
                        <Image verticalAligh={"sub"} marginLeft={"40px"} display={"inline-block"} width={"160px"} opacity={this.state.imageCircles.opacity + ""} src={Me} />
                        <Image verticalAligh={"sub"} marginLeft={"40px"} display={"inline-block"} width={"160px"} opacity={this.state.imageCircles.opacity + ""} src={Me2} />
                    </Wrapper>
                </Container>
            </Container>
        )
    }
}

export default FirstView;
