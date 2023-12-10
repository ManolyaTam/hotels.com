import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const Input = ({ type, label, size, fullWidth, margin }) => {

    return (
        <TextField
            type={type || 'text'}
            label={label}
            size={size || 'small'}
            fullWidth={fullWidth}
            margin={margin}
        />
    );
};

Input.propTypes = {
    type: PropTypes.oneOf(['password', 'text']).isRequired,
    label: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal']),
    fullWidth: PropTypes.bool,
    margin: PropTypes.oneOf(['none', 'dense', 'normal']),
};

export default Input;