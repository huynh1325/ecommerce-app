import Header from '~/components/Header';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import './Home.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Home = () => {
    const getServerTime = async () => {
        const response = await fetch('https://worldtimeapi.org/api/ip');
        const data = await response.json();
        return new Date(data.datetime);
    };

    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [serverTime, setServerTime] = useState(null);

    const saleEndTimes = [
        { hour: 9, minute: 0 },
        { hour: 12, minute: 0 },
        { hour: 15, minute: 0 },
        { hour: 19, minute: 0 },
        { hour: 22, minute: 0 },
    ];

    const getNextSaleEndTime = (serverDate) => {
        const now = serverDate || new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        // Tìm giờ kết thúc tiếp theo
        for (const saleTime of saleEndTimes) {
            if (currentHour < saleTime.hour || (currentHour === saleTime.hour && currentMinute < saleTime.minute)) {
                const endTime = new Date(now);
                endTime.setHours(saleTime.hour, saleTime.minute, 0, 0); // Đặt giờ kết thúc
                return endTime;
            }
        }

        // Nếu không còn giờ nào trong ngày, quay lại giờ đầu tiên của ngày hôm sau
        const nextDay = new Date(now);
        nextDay.setDate(now.getDate() + 1); // Chuyển sang ngày tiếp theo
        nextDay.setHours(saleEndTimes[0].hour, saleEndTimes[0].minute, 0, 0);
        return nextDay;
    };

    useEffect(() => {
        const fetchTime = async () => {
            const serverDate = await getServerTime();
            setServerTime(serverDate);
        };

        fetchTime();
    }, []);

    useEffect(() => {
        if (!serverTime) return; // Nếu chưa có thời gian từ máy chủ thì không làm gì

        let saleEndTime = getNextSaleEndTime(serverTime); // Tìm giờ kết thúc tiếp theo dựa trên thời gian máy chủ

        // Tính toán thời gian còn lại và cập nhật mỗi giây
        const intervalId = setInterval(() => {
            const now = new Date(); // Thời gian hiện tại của máy tính
            const timeRemaining = saleEndTime - now; // Tính thời gian còn lại

            if (timeRemaining > 0) {
                const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
                const seconds = Math.floor((timeRemaining / 1000) % 60);
                setTimeLeft({ hours, minutes, seconds });
            } else {
                saleEndTime = getNextSaleEndTime(new Date());
            }
        }, 1000);

        return () => clearInterval(intervalId); // Dọn dẹp interval khi component unmount
    }, [serverTime]);

    const fsProducts = [
        {
            id: 1,
            discount: '-36%',
            price: '50.000đ',
            sold: 5,
            imageUrl:
                'https://salt.tikicdn.com/cache/280x280/ts/product/ff/1e/ca/fa13d16dd9f223690767ee23acf8c03d.jpg.webp',
            fireIcon: 'https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg',
        },
        {
            id: 2,
            discount: '-36%',
            price: '50.000đ',
            sold: 5,
            imageUrl:
                'https://salt.tikicdn.com/cache/280x280/ts/product/73/1b/c1/903ef3228f4cbfbf105ebeccbb5f7c07.jpg.webp',
            fireIcon: null,
        },
        {
            id: 3,
            discount: '-36%',
            price: '50.000đ',
            sold: 5,
            imageUrl:
                'https://salt.tikicdn.com/cache/280x280/ts/product/73/1b/c1/903ef3228f4cbfbf105ebeccbb5f7c07.jpg.webp',
            fireIcon: 'https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg',
        },
        {
            id: 4,
            discount: '-36%',
            price: '50.000đ',
            sold: 5,
            imageUrl:
                'https://salt.tikicdn.com/cache/280x280/ts/product/73/1b/c1/903ef3228f4cbfbf105ebeccbb5f7c07.jpg.webp',
            fireIcon: 'https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg',
        },
        {
            id: 5,
            discount: '-36%',
            price: '50.000đ',
            sold: 5,
            imageUrl:
                'https://salt.tikicdn.com/cache/280x280/ts/product/73/1b/c1/903ef3228f4cbfbf105ebeccbb5f7c07.jpg.webp',
            fireIcon: null,
        },
        {
            id: 6,
            discount: '-36%',
            price: '50.000đ',
            sold: 5,
            imageUrl:
                'https://salt.tikicdn.com/cache/280x280/ts/product/73/1b/c1/903ef3228f4cbfbf105ebeccbb5f7c07.jpg.webp',
            fireIcon: 'https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg',
        },
        {
            id: 7,
            discount: '-36%',
            price: '50.000đ',
            sold: 5,
            imageUrl:
                'https://salt.tikicdn.com/cache/280x280/ts/product/73/1b/c1/903ef3228f4cbfbf105ebeccbb5f7c07.jpg.webp',
            fireIcon: 'https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg',
        },
        {
            id: 8,
            discount: '-36%',
            price: '50.000đ',
            sold: 5,
            imageUrl:
                'https://salt.tikicdn.com/cache/280x280/ts/product/73/1b/c1/903ef3228f4cbfbf105ebeccbb5f7c07.jpg.webp',
            fireIcon: 'https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg',
        },
        {
            id: 9,
            discount: '-36%',
            price: '50.000đ',
            sold: 5,
            imageUrl:
                'https://salt.tikicdn.com/cache/280x280/ts/product/73/1b/c1/903ef3228f4cbfbf105ebeccbb5f7c07.jpg.webp',
            fireIcon: 'https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg',
        },
        {
            id: 10,
            discount: '-36%',
            price: '50.000đ',
            sold: 5,
            imageUrl:
                'https://salt.tikicdn.com/cache/280x280/ts/product/73/1b/c1/903ef3228f4cbfbf105ebeccbb5f7c07.jpg.webp',
            fireIcon: 'https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg',
        },
        {
            id: 11,
            discount: '-36%',
            price: '50.000đ',
            sold: 5,
            imageUrl:
                'https://salt.tikicdn.com/cache/280x280/ts/product/73/1b/c1/903ef3228f4cbfbf105ebeccbb5f7c07.jpg.webp',
            fireIcon: 'https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg',
        },
        {
            id: 12,
            discount: '-36%',
            price: '50.000đ',
            sold: 5,
            imageUrl:
                'https://salt.tikicdn.com/cache/280x280/ts/product/73/1b/c1/903ef3228f4cbfbf105ebeccbb5f7c07.jpg.webp',
            fireIcon: 'https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg',
        },
    ];

    // const ProductSlider = ({ products }) => {
    const itemsPerPage = 6; // Số sản phẩm hiển thị trên mỗi trang
    const [startIndex, setStartIndex] = useState(0); // Vị trí bắt đầu của sản phẩm đang hiển thị

    // Xử lý nút "Next"
    const handleNext = () => {
        if (startIndex + itemsPerPage < products.length) {
            setStartIndex(startIndex + itemsPerPage);
        }
    };

    // Xử lý nút "Previous"
    const handlePrevious = () => {
        if (startIndex - itemsPerPage >= 0) {
            setStartIndex(startIndex - itemsPerPage);
        }
    };

    // Lấy ra các sản phẩm hiện tại để hiển thị
    const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);
    // };

    const showFireIcon = (product) => product.fireIcon || null;
    return (
        <>
            <Header />
            <div className={cx('main')}>
                <div className={cx('wrapper')}>
                    <div className={cx('side-bar')}>
                        <div className={cx('category')}>
                            <div className={cx('category-title')}>Danh mục</div>
                            <div className={cx('category-product')}>
                                <ul>
                                    <li className={cx('category-list')}>
                                        <img
                                            src="https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png.webp"
                                            alt="images"
                                            className={cx('category-image')}
                                        ></img>
                                        <span className={cx('category-text')}>Nhà Sách Tiki</span>
                                    </li>
                                    <li className={cx('category-list')}>
                                        <img
                                            src="https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp"
                                            alt="images"
                                            className={cx('category-image')}
                                        ></img>
                                        <span className={cx('category-text')}>Nhà Cửa - Đời Sống</span>
                                    </li>
                                    <li className={cx('category-list')}>
                                        <img
                                            src="https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp"
                                            alt="images"
                                            className={cx('category-image')}
                                        ></img>
                                        <span className={cx('category-text')}>Điện thoại - Máy Tính Bảng</span>
                                    </li>
                                    <li className={cx('category-list')}>
                                        <img
                                            src="https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp"
                                            alt="images"
                                            className={cx('category-image')}
                                        ></img>
                                        <span className={cx('category-text')}>Điện thoại - Máy Tính Bảng</span>
                                    </li>
                                    <li className={cx('category-list')}>
                                        <img
                                            src="https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp"
                                            alt="images"
                                            className={cx('category-image')}
                                        ></img>
                                        <span className={cx('category-text')}>Điện thoại - Máy Tính Bảng</span>
                                    </li>
                                    <li className={cx('category-list')}>
                                        <img
                                            src="https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp"
                                            alt="images"
                                            className={cx('category-image')}
                                        ></img>
                                        <span className={cx('category-text')}>Điện thoại - Máy Tính Bảng</span>
                                    </li>
                                    <li className={cx('category-list')}>
                                        <img
                                            src="https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp"
                                            alt="images"
                                            className={cx('category-image')}
                                        ></img>
                                        <span className={cx('category-text')}>Điện thoại - Máy Tính Bảng</span>
                                    </li>
                                    <li className={cx('category-list')}>
                                        <img
                                            src="https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp"
                                            alt="images"
                                            className={cx('category-image')}
                                        ></img>
                                        <span className={cx('category-text')}>Điện thoại - Máy Tính Bảng</span>
                                    </li>
                                    <li className={cx('category-list')}>
                                        <img
                                            src="https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp"
                                            alt="images"
                                            className={cx('category-image')}
                                        ></img>
                                        <span className={cx('category-text')}>Điện thoại - Máy Tính Bảng</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('container-content')}>
                            <div className={cx('top-deal-header')}>
                                <div className={cx('left')}>
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/f8/77/0b/0923990ed377f50c3796f9e6ce0dddde.png"
                                        alt="badge"
                                    />
                                </div>
                                <div className={cx('header-right')}>Xem tất cả</div>
                            </div>
                            <div className={cx('content')}>
                                <span className={cx('icon', 'icon-prev')}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                                <span className={cx('icon', 'icon-next')}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </span>
                            </div>
                        </div>
                        <div className={cx('container-content')}>
                            <div className={cx('fs-header')}>
                                <div className={cx('fs-header-left')}>
                                    <div className={cx('fs-header-title')}>Flash-sale</div>
                                    <div className={cx('fs-header-countdown')}>
                                        <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/dealpage/dot_divider.svg"
                                            alt="colon"
                                        />
                                        <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/dealpage/dot_divider.svg"
                                            alt="colon"
                                        />
                                        <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                                    </div>
                                </div>
                                <div className={cx('header-right')}>Xem tất cả</div>
                            </div>
                            <div className={cx('content')}>
                                <span className={cx('icon', 'icon-prev')} onClick={handlePrevious}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                                <div className={cx('fs-list')}>
                                    {fsProducts.map((product) => (
                                        <div key={product.id} className={cx('fs-product')}>
                                            <div className={cx('image')}>
                                                <span>{product.discount}</span>
                                                <img src={product.imageUrl} alt={`prod${product.id}`} />
                                            </div>
                                            <div className={cx('deal-price')}>
                                                <span>{product.price}</span>
                                            </div>
                                            <div className={cx('deal-qty')}>
                                                <div></div>
                                                <span>Đã bán {product.sold}</span>
                                                {showFireIcon(product) && (
                                                    <img src={showFireIcon(product)} alt="fire-icon" />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <span className={cx('icon', 'icon-next')} onClick={handleNext}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </span>
                            </div>
                        </div>
                        <div className={cx('container-content')}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
