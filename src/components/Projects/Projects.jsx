import './projects.scss';
import repair from '../../img/repair.png';
import bookshop from '../../img/bookshop.png'
import skan from '../../img/skan.png';
import {motion} from 'framer-motion';
const divAnimLeft = {
    hidden: {
        x: -200,
        opacity: 0,
    },
    visible: custom=> ({
        x:0,
        opacity:1,
        transition: {delay: custom*0.2,duration:1.2},
    }),
}
const divAnimRight = {
    hidden: {
        x: 30,
        opacity: 0,
    },
    visible: custom => ({
        x:0,
        opacity:1,
        transition: {delay: custom*0.2,duration:1.2},
    }),
}
const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-wrapper">
                <div className='about-title'><h2>Проекты</h2></div>
                <motion.div 
                    layoutScroll
                    custom={1.5}
                    initial='hidden'
                    whileInView='visible'
                    variants={divAnimLeft}
                >
                    <figure>
                        <img src={repair} alt="repair-project" />
                        <figcaption>
                            <a>Visit Website &#10149; </a>
                            <a href='https://github.com/yungalesgerov/slider_sf' target='_blank' rel='noreferrer'>&lt;code&gt;</a>
                        </figcaption>
                    </figure>
                    <div className='project-description' > 
                        <h2>repair project</h2>
                        <p>
                            Одностраничный лендинг дизайнерского агентства, предоставляющий готовый ремонт под ключ. Вы можете увидеть типы работ, отзывы клиентов и многое другое...
                        </p>
                        <div className='tech-cont'>
                            <span className='tech'>HTML</span>                        
                            <span className='tech'>CSS</span>                        
                            <span className='tech'>JS</span>
                        </div>
                        
                    </div>
                </motion.div>
                <motion.div custom={2}
                    initial='hidden'
                    whileInView='visible'
                    variants={divAnimRight}
                >
                    <div className='project-description'>
                        <h2>bookshop</h2>
                        <p>
                            Онлайн книжный магазин - это виртуальная торговая площадка, где пользователи могут приобрести книги, журналы, аудиокниги и другие печатные издания. Онлайн магазин предлагает удобный и доступный способ приобретения книг, экономя время на поиски и поездки в обычные магазины.
                        </p>
                        <div className='tech-cont'>
                            <span className='tech'>SCSS</span>                        
                            <span className='tech'>JS</span>
                        </div>
                    </div>
                    <figure>
                        <img src={bookshop} alt="bookshop" />
                        <figcaption>
                            <a>Visit Website &#10149; </a>
                            <a href='https://github.com/yungalesgerov/sf-bookshop' target='_blank' rel='noreferrer'>&lt;code&gt;</a>
                        </figcaption>
                    </figure>
                    
                </motion.div>
                <motion.div
                    custom={2}
                    initial='hidden'
                    whileInView='visible'
                    variants={divAnimLeft}
                >
                    <figure>
                        <img src={skan} alt="skan-project" />
                        <figcaption>
                            <a>Visit Website &#10149; </a>
                            <a href='https://github.com/yungalesgerov/fp-scan' target='_blank' rel='noreferrer'>&lt;code&gt;</a>
                        </figcaption>
                    </figure>
                    
                    <div className='project-description'>
                            <h2> skan service</h2>
                        <p>
                            Скан-сервис - это услуга, которая позволяет получать электронные копии (сканы) документов без необходимости посещения офиса компании или загрузки программ на свой компьютер.
                        </p>
                        <div className='tech-cont'>
                            <span className='tech'>Bootstrap</span>                        
                            <span className='tech'>React</span>
                            <span className='tech'>Redux</span>
                            <span className='tech'>St.Comp</span>                        
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </div>
    )
}

export default Projects;