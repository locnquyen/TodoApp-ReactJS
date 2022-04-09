import React, { Component } from 'react'

const RED = '#ff000';
const BLUE = '#0000ff';
const GRAY = '#678c89'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.submitThemeColor = this.submitThemeColor.bind(this)
    }

    submitThemeColor(color) {
        // lưu goá trị mã màu theme vào Store - redux 
        // xử lý sau
        if (color) {
            console.log('handleChangeTheme')
            this.props.saveColorTheme(color);
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('UNSAFE_componentWillReceiveProps: ' + JSON.stringify(nextProps))
        document
            .documentElement
            .style
            .setProperty("--main-color", nextProps.themeColor.color);
    }
    render() {
        return (
            <div className="footer">
                <div className="vertical-center">
                    <span>
                        <button onClick={this.submitThemeColor(RED)} className="dot red" />
                        <button onClick={this.submitThemeColor(BLUE)} className="dot blue" />
                        <button onClick={this.submitThemeColor(GRAY)} className="dot gray" />
                    </span>
                </div>
            </div>
        )
    }
}
