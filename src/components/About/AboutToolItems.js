import styles from './About.scss';

const AboutToolItems = ({ items }) => {
    const textItems = items.map((item) => {
        let skills = item.text.map((skill, i) => (
            <li key={i}>
                <p>{skill}</p>
            </li>
        ));
        return (
            <div key={item.id}>
                <h4>{item.header}</h4>
                <ul className={styles.aboutToolsInnerUl}>{skills}</ul>
            </div>
        );
    });
    return textItems;
};

export default AboutToolItems;
