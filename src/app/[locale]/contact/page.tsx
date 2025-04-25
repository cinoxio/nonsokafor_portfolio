import { Fragment, Suspense } from "react"
import { Loader } from "./Loader"

const ContactPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<Loader />}>
                <SubmitForm />
            </Suspense>
        </Fragment>
    )
}

export default ContactPage;
