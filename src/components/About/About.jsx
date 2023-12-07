
import './about.scss';
import node from  '../../img/node.svg';
import sass from  '../../img/sass.svg';
import js from  '../../img/js.svg';
import css from  '../../img/css.svg';
import react from  '../../img/react.svg';
import html from  '../../img/html5.svg';
import img from '../../img/photo1701960445.jpeg'
import {motion} from 'framer-motion'

const divAnimUp = {
    hidden: {
        y:200,
        opacity: 0,
    },
    visible: custom=> ({
        y:0,
        opacity:1,
        transition: {delay: custom*0.2,duration:1.2},
    }),
}

const About = () => {
    return (
        <div className="about">
            <div className='about-wrapper'>

                <motion.div className='about-soft-skills'
                    custom={1}
                    initial='hidden'
                    whileInView='visible'
                    variants={divAnimUp}
                >
                    <section>
                        <div className='about-hero'>
                            <img src={img} alt="" />
                        </div>
                        <div className='about-hero-desc'>
                            <p>
                                <span>Эльчин Алесгеров 22 года </span>
                                Изучаю данное направление на протяжении 2ух лет и не собираюсь на этом останавливаться.
                                Я стремлюсь к непрерывному развитию и совершенствованию своих навыков, чтобы быть полезным и эффективным сотрудником для любой компании.
                                Мне интересно работать в компании, которая ценит качество и профессионализм. Я ищу работу, где я смогу применить свой опыт и навыки для достижения общих целей и развития компании. Я также хочу работать в коллективе, где каждый сотрудник уважает и ценит друг друга.
                                <span>&#128205;Ростов-на-Дону - Таганрог</span>
                            </p>
                        </div>
                    </section>
                    
                    <div className='about-hero-skills'>
                        Отличительные черты:
                        <span>Надёжность 🤝</span>
                        <span>Позитивный настрой 👍</span>
                        <span>Умение никогда не сдаваться 👊</span>
                    </div>
                </motion.div>
                <div className='about-title-tools'><h2>ИНСТРУМЕНТЫ</h2></div>
                <div className='about-title-desc' >
                    <div><img src={html} alt="html" /> <span>HTML5</span> </div>
                    <div><img src={css} alt="css" /><span>CSS</span></div>
                    <div><img src={js} alt="js" /><span>Javascript</span></div>
                    <div><img src={react} alt="react" /><span>React</span></div>
                    <div><img src={node} alt="node" /><span>Nodejs</span></div>
                    <div><img src={sass} alt="sass" /><span>Sass</span></div>
                </div>
            </div>
        </div>
    )
}

export default About;