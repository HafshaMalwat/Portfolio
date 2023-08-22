import React, { useState } from "react";

import { styles } from './styles'

const Avatar = props => {
    const [hovered, setHovered] = useState(false)

    return (
        <div style={props.style}>              
            <div 
                className='transition-3'
                style={{
                    ...styles.avatarHello,
                    ...{ opacity: hovered ? '1' : '0' }
                }}
            >
                Hey it's ChatGPT! 🤙
            </div>

            <div 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => props.onClick && props.onClick()}
                className='transition-3'
                style={{
                    ...styles.chatWithMeButton, 
                    ...{ border: hovered ? '4px solid #7a39e0' : '4px solid #006ecd' }
                }}
            />
        </div>
    )
}

export default Avatar;