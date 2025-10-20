const Technologies = (props) => {
    return (
        <section className="container w-100 mt-5">
            <div className="d-flex flex-column align-items-start justify-content-center hide element" id="technologies">
                <p className="fs-2 fw-semibold pb-1 mb-4 l-to-r-half-border-bottom"> {props.title} </p>
                <div className="col-12 mb-3 mx-auto d-flex flex-row flex-wrap align-items-center justify-content-md-start justify-content-center gap-md-4 gap-3 ">
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default Technologies