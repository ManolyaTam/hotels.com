import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const Input = ({ type, label, size }) => {

    return (
        <TextField type={type || 'text'} label={label} size={size || 'small'} />
    );
};

Input.propTypes = {
    type: PropTypes.oneOf(['password', 'text']).isRequired,
    label: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal']),
};

export default Input;