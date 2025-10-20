import profilePicture from "./assets/images/me.jpg"

const Hero = () => {
    return (
        <section className="container my-auto pt-5 pb-2">
            <div className="d-flex flex-column align-items-center justify-content-center gap-4">
                <img src={profilePicture} className="rounded-circle border border-3 border-dark profile" alt="Banyar Oo" id="profile" />
                <div className="text-center">
                    <p className="fs-1 fw-semibold mb-2" id="name"> Banyar Oo </p>
                    <p className="mb-2 fw-semilight text-muted" id="field"> Machine Learning · Natural Language Processing · Back-end Development </p>
                </div>
            </div>
        </section>
    )
}

export default Hero