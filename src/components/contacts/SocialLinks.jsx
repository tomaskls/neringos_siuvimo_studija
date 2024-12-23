import style from './Contacts.module.css';
import Fbicon from '/icons/facebook_icon.png';
import Inicon from '/icons/instagram_logo.webp';
import Pinicon from '/icons/Pinterest.svg.png'
import { useTouch } from '../Usetouch';

export function FbLink() {
    const { isTouched: isFbTouched, handleTouchStart: handleFbTouchStart, handleTouchEnd: handleFbTouchEnd } = useTouch();

    return (
        <a className={`${style.fbLink} ${isFbTouched ? style.touched : ''}`}
            href="https://www.facebook.com/neringossiuvimostudija"
            target="_blank"
            onTouchStart={handleFbTouchStart}
            onTouchEnd={handleFbTouchEnd}>Sekite mus Facebook<img src={Fbicon} alt="facebook icon" />
        </a>
    )
}
export function InLink() {
    const { isTouched: isInTouched, handleTouchStart: handleInTouchStart, handleTouchEnd: handleInTouchEnd } = useTouch();

    return (
        <a className={`${style.fbLink} ${isInTouched ? style.touched : ''}`}
            href="https://www.instagram.com/neringossiuvimostudija"
            target="_blank"
            onTouchStart={handleInTouchStart}
            onTouchEnd={handleInTouchEnd}>Instagram<img src={Inicon} alt="instagram icon" />
        </a>
    )
}
export function PinLink() {
    const { isTouched: isInTouched, handleTouchStart: handleInTouchStart, handleTouchEnd: handleInTouchEnd } = useTouch();

    return (
        <a className={`${style.fbLink} ${isInTouched ? style.touched : ''}`}
            href="https://www.pinterest.com/neringossiuvimostudija/"
            target="_blank"
            onTouchStart={handleInTouchStart}
            onTouchEnd={handleInTouchEnd}>Pinterest<img src={Pinicon} alt="pinterest icon" />
        </a>
    )
}