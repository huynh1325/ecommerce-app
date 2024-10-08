import Header from '~/components/Header';
import Login from '~/components/Login';
import './Home.module.scss';

function Home() {
    return (
        <>
            <Header />
            <Login />
            <h2>Home page</h2>
        </>
    );
}

export default Home;
