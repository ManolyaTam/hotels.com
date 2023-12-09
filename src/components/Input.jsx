const Input = ({ type }) => {
    const allowedTypes = ['password', 'text'];
    
    if (!allowedTypes.includes(type)) {
        throw new Error(`Invalid input type: ${type}`);
    }

    return (
        <input type={type} />
    );
};

export default Input;
