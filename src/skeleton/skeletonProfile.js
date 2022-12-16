import React from 'react';
import Shimmer from './shimmer';
import SkeletonElement from './skeletonElement';

const SkeletonProfile = ({theme}) => {
    const ThemeClass = theme || 'light'
    return ( 
        <div className={`skeleton-wrapper  ${ThemeClass}`}>
            <div className='skeleton-profile'>
                <div>
                    <SkeletonElement type="avatar"/>
                </div>
                <div>
                    <SkeletonElement type="title"/>
                    <SkeletonElement type="text"/>
                    <SkeletonElement type="text"/>
                </div>
            </div>
            <Shimmer/>
        </div>
     );
}
 
export default SkeletonProfile;


 