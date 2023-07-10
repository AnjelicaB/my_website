import {Sign1, Email, Github, Insta} from '../icons/icons.js'
import styles from "./footer.css" 

export function Footer() {
    return (
        <foot>
            <div className='Sign'>
                <Sign1 />
            </div>
            <div className='Social_media'>
                <Email />
                <Github />
                <Insta />
            </div>
        </foot>
    )
}
