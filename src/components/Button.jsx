import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';

const Button = ({ label, variant, onClick }) => {

    return (
        <MuiButton
            onClick={onClick}
            variant={variant || 'outlined'}
        >
            {label}
        </MuiButton>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['outlined', 'text', 'contained']),
    onClick: PropTypes.func
};

export default Button;