const Activities = ({data}) => {
    return (
        <section className="container w-100 mt-5">
            <div className="d-flex flex-column align-items-start justify-content-center hide element" id="activities">
                <p className="fs-2 fw-semibold pb-1 mb-4 l-to-r-half-border-bottom"> Activities </p>
                <div className="col-12 mb-3 mx-auto d-flex flex-column
                align-items-start justify-content-center gap-3">
                    {
                        data.map((item, index) => {
                            return (
                                <div className="d-flex flex-column align-items-start justify-content-center pb-3 mb-2 w-100" 
                                    style={{ borderBottom: '2px solid #EDEDED' }} key={index}>
                                    <span className="fw-semibold fs-institution"> {item.title} </span>
                                    <span className="fw-semibold fs-degree text-muted"> {item.description} </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Activities