type ButtonProps = {
    text: string,
    handler: () => void
}

const Button = ({text, handler} : ButtonProps) => {
    return (  
        <button onClick={handler}>{text}</button>
    );
}

export default Button;