import './Slide.scss';

export const Slide = ({ image, visible }) =>
{
    return(
        <div 
            className={ `Slide ${ visible ? 'visible' : 'hidden' }` }
        >
            <img src={ image } alt="" />
        </div>
    );
}
