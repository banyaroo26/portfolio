import UCSYLogo from "./assets/images/ucsy.png"

const Education = () => {
    return (
        <section className="container w-100 mt-5">
            <div className="d-flex flex-column align-items-start justify-content-center hide element" id="education">
                <p className="fs-2 fw-semibold pb-1 mb-4 l-to-r-half-border-bottom"> Education </p>
                <div className="col-12 mb-3 px-md-5 py-md-4 px-4 py-3 mx-auto d-flex flex-row
                align-items-center justify-content-start gap-md-4 gap-3 education">
                    <img src={UCSYLogo} />
                    <div className="d-flex flex-column align-items-start justify-content-center">
                        <span className="fs-institution" style={{fontWeight: 500}}> University of Computer Studies, Yangon </span>
                        <span className="fs-degree text-muted" style={{fontWeight: 400}}> Bachelor of Computer Science (Knowledge Engineering) </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education