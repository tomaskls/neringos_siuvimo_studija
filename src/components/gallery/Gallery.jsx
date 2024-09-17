import style from './Gallery.module.css'
import { Link } from 'react-router-dom';

export function Pictures() {
    return (
        <>
        <div className={style.sasa}></div>
        <Link to="/">home</Link>

        </>
    )
}