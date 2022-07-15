import React from 'react'
import styles from './Button.module.css'
const Button = ({ children, ...props }) => {
	console.log(props)
	return <button {...props}>{children}</button>
}

export default Button
