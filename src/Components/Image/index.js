import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import style from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallBack: customFallBack, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallBack);
    };
    return (
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Image;
