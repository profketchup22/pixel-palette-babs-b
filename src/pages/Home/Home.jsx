
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home-main">
                <h1 className="home-title">Welcome to Pixel Palette</h1>
                <p className="home-subtitle">
                    A nostalgic drawing application!
                </p>
                <Link to="/canvas">
                <Button label="Start Creating" type="button" />
                </Link>
            </div>
        </div>
    )
    
}

export default Home