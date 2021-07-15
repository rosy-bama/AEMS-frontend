import React from 'react';
import colors from '../utils/Colors';
import Icons from '../utils/Icons';
import Layout from './Layout';

function Owner() {
    return (
        <Layout isOwner={true}>
            <div className='overview'>
                <section className='card-wrapper'>
                    <div className='card-container grid'>
                        <div className='card col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='wrapper'>
                                <h3 className='__card-title mg-b-15'>Total visit</h3>
                                <div className='flex align-center justify-space-between'>
                                    <div className='card-icon'>
                                        <Icons name='IconBarChart' size={25} color={colors.main_1} />
                                    </div>
                                    <div className='card-count' style={{ color: colors.main_1 }}>
                                        657
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='wrapper'>
                                <h3 className='__card-title mg-b-15'>Total page views</h3>
                                <div className='flex align-center justify-space-between'>
                                    <div className='card-icon'>
                                        <Icons name='IconBarChart' size={25} color={colors.main_2} />
                                    </div>
                                    <div className='card-count' style={{ color: colors.main_2 }}>
                                        869
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='wrapper'>
                                <h3 className='__card-title mg-b-15'>Unique visitor</h3>
                                <div className='flex align-center justify-space-between'>
                                    <div className='card-icon'>
                                        <Icons name='IconBarChart' size={25} color={colors.main_3} />
                                    </div>
                                    <div className='card-count' style={{ color: colors.main_3 }}>
                                        911
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='wrapper'>
                                <h3 className='__card-title mg-b-15'>Total visit</h3>
                                <div className='flex align-center justify-space-between'>
                                    <div className='card-icon'>
                                        <Icons name='IconBarChart' size={25} color={colors.main_1} />
                                    </div>
                                    <div className='card-count' style={{ color: colors.main_1 }}>
                                        021
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Owner;
