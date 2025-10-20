const Technology = ({image, title}) => {
    return (
        <div className="technology-slot d-flex flex-column align-items-center justify-content-center">
            <img style={{width: 50, height: "auto"}} src={image} alt={title} />
            <span className="text-muted mt-1" style={{fontSize: "small"}}> {title} </span>
        </div>
    )
}

export default Technology