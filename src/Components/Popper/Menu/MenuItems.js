import PropTypes from 'prop-types';
import Button from '../../Button';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);
function MenuItems({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} text onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItems.prototype = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default MenuItems;
