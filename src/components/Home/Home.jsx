import './home.scss';
import {motion} from 'framer-motion';

const divAnimLeft = {
    hidden: {
        x: -300,
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

const Home = () => {
    return (
        <div className="home">
            <div className='home-wrapper'>
                <motion.div 
                    custom={2}
                    initial='hidden'
                    whileInView='visible'
                    variants={divAnimLeft}
                >
                    <p >
                        <span>✌🏻</span>
                        Hi, I&#8242;m Elchin
                    </p>
                    <div>
                        <h1>JUNIOR ФРОНТЭНД РАЗРАБОТЧИК</h1>
                        <span>на которого можно положиться</span>    

                    </div>
                </motion.div>
                <motion.div 
                custom={2}
                initial='hidden'
                whileInView='visible'
                variants={divAnimRight}
                className='home-img'
                >

                </motion.div>
            </div>
        </div>
    )
}
export default Home;