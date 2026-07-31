import '../styles/Testimonial.css';

function Testimonial(props) {
    return (
        <div className='testimonial-container'>
            <img
                className='testimonial-image'
                src={props.image}
                alt={`Photo of ${props.name}`}
            />

            <div className='testimonial-text-container'>
                <p className='testimonial-name'>
                    <strong>{props.name}</strong> in {props.country}
                </p>

                <p className='testimonial-job'>
                    {props.jobTitle} at <strong>{props.jobCompany}</strong>
                </p>

                <p className='testimonial-text'>
                    {props.text}
                </p>

            </div>
        </div>
    );
}

export default Testimonial;