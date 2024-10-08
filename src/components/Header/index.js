import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import toko from '~/assets/img/toko.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faHouse,
    faFaceSmile,
    faCartShopping,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('header')}>
            <div className={cx('logo')}>
                <img className={cx('logo-img')} src={toko} alt="logo" />
                <span className={cx('logo-text')}>Tốt & Nhanh</span>
            </div>
            <div className={cx('header-btn')}>
                <div className={cx('search')}>
                    <div className={cx('search-home')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-logo')} />
                        <input type="text" placeholder={'Tìm kiếm...'} className={cx('search-input')} />
                        <button className={cx('search-btn')}>Tìm kiếm</button>
                    </div>
                    <div className={cx('search-account')}>
                        <button className={cx('search-account-home')}>
                            <FontAwesomeIcon icon={faHouse} className={cx('home-icon')} />
                            <span className={cx('icon-text')}>Trang chủ</span>
                        </button>
                        <button className={cx('search-account-btn')}>
                            <FontAwesomeIcon icon={faFaceSmile} className={cx('react-icon')} />
                            <span className={cx('icon-text')}>Tài khoản</span>
                        </button>
                        <div className={cx('cart-wrapper')}></div>
                        <span className={cx('cart-icon')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className={cx('cart-quantity')}>0</span>
                        </span>
                    </div>
                </div>
                <div className={cx('location')}>
                    <FontAwesomeIcon icon={faLocationDot} className={cx('location-icon')} />
                    <span className={cx('location-text')}>Giao đến:</span>
                    <a href="/" className={cx('location-href')}>
                        Bạn muốn giao đến đâu?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
