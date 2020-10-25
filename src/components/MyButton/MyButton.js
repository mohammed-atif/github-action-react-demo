import React from 'react';

const style = {
    primary: {
        padding: '8px',
        alignContent: 'center',
        backgroundColor: 'lightseagreen',
        color: 'linen',
        width: '200px',
    },
    secondary: {
        padding: '8px',
        alignContent: 'center',
        backgroundColor: 'orange',
        color: 'linen',
        width: '150px',
    },
};

const MyButton = (props) => {

    const { text, onClick, type = 'primary' } = props

    return (
        <button onClick={onClick} style={style[type]}>
            {text}
        </button>
    )
}

export default MyButton;