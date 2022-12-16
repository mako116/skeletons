import React from 'react';
import Shimmer from './shimmer';
import SkeletonElement from './skeletonElement';

const SkeletonArticle = ({theme}) => {
    const ThemeClass = theme || 'light'

    return ( 
        <div className={`skeleton-wrapper ${ThemeClass}`}>
            <div className='skeleton-article'>
                <SkeletonElement type="title"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
            </div>
            <Shimmer/>
        </div>
        
     );
}
 
export default SkeletonArticle;