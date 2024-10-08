import styles from './Login.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Login = (props) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            props.onClose();
        }
    };

    if (!props.modalLogin) return null;

    return (
        <div className={cx('overlay')} onClick={handleOverlayClick}>
            <div className={cx('wrapper')}>
                <div className={cx('login')}>
                    {/* <div className={cx('login-form')}> */}
                    <div className={cx('heading')}>
                        <h4>Chao xìn,</h4>
                        <p>Đăng nhập hoặc tạo tài khoản</p>
                    </div>
                    <div className={cx('input')}>
                        <input placeholder="Số điện thoại" type="text" maxLength={10} className={cx('login-input')} />
                    </div>
                    <button className={cx('login-btn')}>Tiếp tục</button>
                    <div className={cx('login-with-email')}>
                        <a href="/">Đăng nhập bằng email</a>
                    </div>
                    <p className={cx('social-heading')}>
                        <span className={cx('social-heading-text')}>Hoặc tiếp tục bằng</span>
                    </p>
                    <ul className={cx('social-items')}>
                        <li className={cx('social-item')}>
                            <img
                                src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png"
                                alt="facebook"
                            />
                        </li>
                        <li className={cx('social-item')}>
                            <img
                                src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png"
                                alt="google"
                            />
                        </li>
                    </ul>
                    <p className={cx('note')}>
                        Bằng việc tiếp tục, bạn đã đọc và đồng ý với <a href="/">Điều khoản sử dụng</a> và{' '}
                        <a href="/">Chính sách bảo mật thông tin cá nhân</a> của Toko
                    </p>
                    {/* </div> */}
                </div>
                <div className={cx('login-img')}>
                    <img
                        src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
                        alt="img"
                        className={cx('img')}
                    ></img>
                    <div className={cx('content')}>
                        <h4>Mua sắm tại Toko</h4>
                        <span>Siêu ưu đãi mỗi ngày</span>
                    </div>
                </div>
                <button className={cx('btn-close')} onClick={props.onClose}>
                    <img
                        src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png"
                        alt="close"
                    />
                </button>
            </div>
        </div>
    );
};

export default Login;
