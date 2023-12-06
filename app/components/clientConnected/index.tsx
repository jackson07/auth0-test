"use client";

import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from 'next/navigation'

export default function ClientConnected() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (!user) return redirect('/api/auth/login');
}
