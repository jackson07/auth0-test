'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react';
import { redirect } from 'next/navigation'
// import Image from 'next/image'

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;  
  // if (!user) return redirect('/api/auth/login');

  return (
    user && (
      <div className='flex flex-col items-center'>
        {/* <img 
          src={user.picture}
          alt={user.name} 
        /> */}
        <div className='flex flex-col items-center'>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    )
  );
}