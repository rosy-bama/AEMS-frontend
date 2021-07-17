import React from 'react';
import colors from './Colors';
import Icons from './Icons';

const CardContainer = ({ title, children, containerClassName, className, close, handleCloseModal, ...rest }) => {
    return (
        <div className={`card-container pd-15 ${containerClassName}`} {...rest}>
            <div className='card'>
                {title || close ? (
                    <div className='flex justify-space-between align-center __card-options mg-b-15'>
                        {title && <h3 className='__title'>{title}</h3>}
                        <div className='flex align-center justify-flex-end filter-settings'>
                            {close && (
                                <div className='__filters flex justify-space-between align-center' onClick={handleCloseModal}>
                                    <div className='close-btn flex justify-space-between align-center'>
                                        <Icons name='IconClose' size={22} color={colors.dark} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : null}
                <div className={`__content ${className}`}>{children}</div>
            </div>
        </div>
    );
};

export default CardContainer;
