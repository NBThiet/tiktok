import classNames from 'classnames/bind';
import style from '../Sidebar/Sidebar.module.scss';
import routes from '../../../config/routes';
import Menu, { MenuItem } from '../Sidebar/Menu';
import { HomeIcon, UserGroupIcon, LiveIcon } from '../../../Components/Icons';
const cx = classNames.bind(style);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="LIVE" to={routes.live} icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
