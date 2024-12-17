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
import { useEffect, useState } from 'react';
import Login from '../Login';

const cx = classNames.bind(styles);

const Header = () => {
    const placeholder = [
        'Giá siêu rẻ',
        'Freeship',
        '100% hàng thật',
        'Hoàn 200% nếu hàng giả',
        'Giao nhanh 2h',
        '30 ngày đổi trả',
    ];

    const [modalLogin, setModalLogin] = useState(false);
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

    const openModal = () => {
        setModalLogin(true);
    };

    const closeModal = () => {
        setModalLogin(false);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPlaceholder((prevIndex) => (prevIndex + 1) % placeholder.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className={cx('header')}>
                <div className={cx('logo')}>
                    <img className={cx('logo-img')} src={toko} alt="logo" />
                    <span className={cx('logo-text')}>Tốt & Nhanh</span>
                </div>
                <div className={cx('header-btn')}>
                    <div className={cx('search')}>
                        <div className={cx('search-home')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-logo')} />
                            <input
                                type="text"
                                placeholder={placeholder[currentPlaceholder]}
                                className={cx('search-input')}
                            />
                            <button className={cx('search-btn')}>Tìm kiếm</button>
                        </div>
                        <div className={cx('search-account')}>
                            <button className={cx('search-account-home')}>
                                <FontAwesomeIcon icon={faHouse} className={cx('home-icon')} />
                                <span className={cx('icon-text')}>Trang chủ</span>
                            </button>
                            <button onClick={openModal} className={cx('search-account-btn')}>
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
            <Login modalLogin={modalLogin} onClose={closeModal} />
        </>
    );
};

export default Header;
