/* eslint-disable react/prop-types */
import styles from '../styles/Global';

const Button = ({ assetUrl, link }) => {
  return (
    <div
      className={styles.btnBlack}
      onClick={() => window.open(link, '_blank')}>
      <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>Demo</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Video</p>
      </div>
    </div>
  );
};

export default Button;
