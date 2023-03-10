 import React, { useEffect, useState } from 'react'
import SkeletonProfile from '../skeleton/skeletonProfile';

 const User = () => {
    const[profile, resProfile]=useState(null)
    useEffect( ()=>{
        setTimeout(async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
          const data = await res.json()
          resProfile(data)
        }, 3000);
    })
    return ( 
        <div className='user'>
                <h2>user profile</h2>
                {profile && (
                    <div className='profile'>
                        <h3>{profile.username}</h3>
                        <p>{profile.email}</p>
                        <a href={profile.website}>{profile.website}</a>
                    </div>
                    
                )}
                {!profile && <SkeletonProfile   theme="dark"/> }
        </div>
     );
   }
 export default User;