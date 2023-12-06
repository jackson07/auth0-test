import React from 'react';
import ProfileClient from '../api/components/profileClient/client';
import ClientConnected from '../api/components/clientConnected';

export default function Products() { 
  return (   
      <div className='flex items-center justify-center'>
        <ClientConnected/>
        Welcome,
        <ProfileClient/>
        <a href='/api/auth/logout'>Logout</a>
      </div>    
  )
}
