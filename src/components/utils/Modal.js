import React, { useEffect } from 'react';

import colors from '../utils/Colors';
import CardContainer from './CardContainer';

const Modal = ({ children, className, title, modal, setModal, setToastState, setErrors, modalSize }) => {
    const handleCloseModal = () => {
        setModal({ ...modal, close: true });
        if (setToastState) setToastState({});
        if (setErrors) setErrors({});
    };

    useEffect(() => {
        const root = document.querySelector('#root');
        if (Object.keys(modal).length === 1) return root.classList.add('disable');
        else {
            root.classList.remove('disable');
            return setModal({});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modal]);

    return (
        <div className={`modal-container flex align-center justify-center ${className}`}>
            <CardContainer title={title} close style={{ backgroundColor: colors.white, maxWidth: modalSize }} handleCloseModal={handleCloseModal} containerClassName='modal-wrapper'>
                <div className='modal'>
                    <form className='grid auth-form'>{children}</form>
                </div>
            </CardContainer>
        </div>
    );
};

export default Modal;
