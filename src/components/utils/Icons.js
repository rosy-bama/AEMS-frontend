import React from 'react';

const Svg = ({ color, size, viewBox = '0 0 24 24', children, title, ...props }) => (
    <svg xmlns='http://www.w3.org/2000/svg' fill={color} height={size} width={size} viewBox={viewBox} stroke='currentColor' strokeWidth='0' {...props}>
        {title && <title>{title}</title>}
        {children}
    </svg>
);

const IconBarChart = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 512 512' color={color} {...props}>
        <path d='M480 496H48a32 32 0 01-32-32V32a16 16 0 0132 0v432h432a16 16 0 010 32z' />
        <path d='M156 432h-40a36 36 0 01-36-36V244a36 36 0 0136-36h40a36 36 0 0136 36v152a36 36 0 01-36 36zM300 432h-40a36 36 0 01-36-36V196a36 36 0 0136-36h40a36 36 0 0136 36v200a36 36 0 01-36 36zM443.64 432h-40a36 36 0 01-36-36V132a36 36 0 0136-36h40a36 36 0 0136 36v264a36 36 0 01-36 36z' />
    </Svg>
);

const IconClose = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 16 16' color={color} {...props}>
        <path d='M8.94 7.99988L13.14 3.80655C13.2655 3.68101 13.3361 3.51075 13.3361 3.33321C13.3361 3.15568 13.2655 2.98542 13.14 2.85988C13.0145 2.73434 12.8442 2.66382 12.6667 2.66382C12.4891 2.66382 12.3189 2.73434 12.1933 2.85988L8 7.05988L3.80667 2.85988C3.68113 2.73434 3.51087 2.66382 3.33333 2.66382C3.1558 2.66382 2.98554 2.73434 2.86 2.85988C2.73446 2.98542 2.66394 3.15568 2.66394 3.33321C2.66394 3.51075 2.73446 3.68101 2.86 3.80655L7.06 7.99988L2.86 12.1932C2.79751 12.2552 2.74792 12.3289 2.71407 12.4102C2.68023 12.4914 2.6628 12.5785 2.6628 12.6665C2.6628 12.7546 2.68023 12.8417 2.71407 12.9229C2.74792 13.0042 2.79751 13.0779 2.86 13.1399C2.92198 13.2024 2.99571 13.252 3.07695 13.2858C3.15819 13.3197 3.24533 13.3371 3.33333 13.3371C3.42134 13.3371 3.50848 13.3197 3.58972 13.2858C3.67096 13.252 3.74469 13.2024 3.80667 13.1399L8 8.93988L12.1933 13.1399C12.2553 13.2024 12.329 13.252 12.4103 13.2858C12.4915 13.3197 12.5787 13.3371 12.6667 13.3371C12.7547 13.3371 12.8418 13.3197 12.9231 13.2858C13.0043 13.252 13.078 13.2024 13.14 13.1399C13.2025 13.0779 13.2521 13.0042 13.2859 12.9229C13.3198 12.8417 13.3372 12.7546 13.3372 12.6665C13.3372 12.5785 13.3198 12.4914 13.2859 12.4102C13.2521 12.3289 13.2025 12.2552 13.14 12.1932L8.94 7.99988Z' />
    </Svg>
);

const Icons = ({ name, size, color, ...props }) => {
    const inputProps = { name, size, color, ...props };

    switch (name) {
        case 'IconBarChart':
            return <IconBarChart {...inputProps} />;

        case 'IconClose':
            return <IconClose {...inputProps} />;

        default:
            break;
    }
    return <div>icon</div>;
};

export default Icons;
