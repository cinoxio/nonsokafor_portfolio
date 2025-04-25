import Loading from '@/components/Loading';
import LoginForm from '@/components/LoginForm';
import React, { Suspense } from 'react'

function LoginPage() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <LoginForm />
            </Suspense>
        </>
    )
}

export default LoginPage;