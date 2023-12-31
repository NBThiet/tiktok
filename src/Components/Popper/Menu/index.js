import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItems from './MenuItems';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(style);
const defaultfn = () => {};
function Menu({ children, items = [], onChange = defaultfn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const RenderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            delay={[0, 500]}
            interactive
            offset={[12, 8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={'Language'}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}> {RenderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={(prev) => {
                prev.slice(0, 1);
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
