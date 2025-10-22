import { Sparkles, Video, Image as ImageIcon, TrendingUp } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.gradient}></div>

            <div className={styles.content}>
                <div className={styles.badge}>
                    <Sparkles className={styles.badgeIcon} />
                    <span>Home Furniture & Interior Design Specialists</span>
                </div>

                <h1 className={styles.title}>
                    Transform Your Space with
                    <span className={styles.highlight}> Premium Furniture Content</span>
                </h1>

                <p className={styles.description}>
                    We create stunning visual content for furniture stores and interior design businesses.
                    Discover our portfolio of successful campaigns showcasing beautiful home furnishings.
                </p>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <Video className={styles.statIcon} />
                        <div>
                            <h3>80+</h3>
                            <p>Videos Created</p>
                        </div>
                    </div>
                    <div className={styles.stat}>
                        <ImageIcon className={styles.statIcon} />
                        <div>
                            <h3>135+</h3>
                            <p>Photo Shoots</p>
                        </div>
                    </div>
                    <div className={styles.stat}>
                        <TrendingUp className={styles.statIcon} />
                        <div>
                            <h3>20+</h3>
                            <p>Furniture Brands</p>
                        </div>
                    </div>
                </div>

                <a href="#videos" className={styles.cta}>
                    View Our Work
                </a>
            </div>
        </section>
    );
};

export default Hero;
