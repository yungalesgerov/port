
import './contact.scss'
import git from '../../img/github.png';
import mail from '../../img/mail.png'
const Contact = () => {
    return (
        <div className="contact">
            <a  href='https://github.com/yungalesgerov' target='_blank' rel='noreferrer'>
                <p>Github</p>
                <img src={git} alt="gitHub" />
            </a>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank' rel='noreferrer' >
                <p>Mail</p>
                <img src={mail} alt="mail" />
            </a>
        </div>
    )
}


export default Contact;