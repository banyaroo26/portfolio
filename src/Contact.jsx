const Contact = () => {
    return (
        <section className="container mb-2 w-100 mt-3">
            <div className="col-8 mx-auto p-2">
                <div className="d-flex align-items-center justify-content-center gap-5">
                    <a className="fs-4 nav-link text-light social-icon" href="https://github.com/banyaroo26" id="github"><i className="fab fa-github text-dark"></i></a>
                    <a className="fs-4 nav-link text-light social-icon" href="https://www.kaggle.com/banyaroo26" id="kaggle"><i className="fab fa-kaggle text-dark"></i></a>
                    <a className="fs-4 nav-link text-light social-icon" href="mailto:oobanyar127@gmail.com" id="email"><i className="fa fa-envelope text-dark"></i></a>
                    <a className="fs-4 nav-link text-light social-icon" href="https://www.linkedin.com/in/banyaroo/" id="linkedin"><i className="fab fa-linkedin text-dark"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Contact