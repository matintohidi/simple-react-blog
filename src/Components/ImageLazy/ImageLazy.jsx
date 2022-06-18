import { useEffect, useState, useRef } from 'react';

export const ImageLazy = ({ src, alt, className, onClick }) => {
    const [source, setSource] = useState('');
    const refEl = useRef();

    useEffect(() => {
        let observer = new IntersectionObserver(
            (d) => {
                if (d[0].isIntersecting) {
                    setSource(src);
                    observer.disconnect();
                }
            },
        );
        if (refEl.current) {
            observer.observe(refEl.current);
        }
        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [ src ]);

    return (
        <img
            src={source}
            alt={alt}
            ref={refEl}
            className={`${className} ${source === '' ? 'blur-sm' : ''}`}
            onClick={onClick}
        />
    );
};