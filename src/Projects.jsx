const Projects = ({projectChunks}) => {
    return (
        <section className="container my-auto mt-5">
            <span className="fs-2 fw-semibold pb-1 mb-4 l-to-r-half-border-bottom"> Projects </span>
            <section className="container py-2 mt-md-2 mt-2">
                {
                    projectChunks.map((chunk, cindex) => {
                        return (
                            <div className="d-flex flex-column flex-md-row flex-wrap align-items-stretch
                            justify-content-center justify-content-md-center gap-4 px-md-3" key={cindex}>
                                {
                                    chunk.map((project, pindex) => {
                                        return (
                                            <div className="card the-image-container rounded-0 mt-4" key={pindex}>
                                                <div className="image-wrapper">
                                                    <img className="the-image" src={project.image} />
                                                </div>
                                                <div className="mx-4 my-3 d-flex flex-column align-items-start justify-content-center">
                                                    <span className="title mt-2" style={{fontWeight: 625}}> {project.title} </span>
                                                    <span className="mt-2 text-muted description" style={{fontWeight: 400}}>
                                                        {project.description}
                                                    </span>
                                                </div>
                                                {project.icons}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </section>
        </section>
    )
}

export default Projects