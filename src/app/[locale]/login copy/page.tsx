import LoginSection from './components/LoginSection';
import { Suspense } from "react"
export default function SignInPage() {
    return (
        <>
        <Suspense fallback={"<div>loading...</div>"}>
            <LoginSection />
        </Suspense>
        </>
    );
}
