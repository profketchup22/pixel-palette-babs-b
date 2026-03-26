
// connect css file to component
import './Footer.css'

// capital F so react knows its a component
function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text"> Pixel Palette - By Babs B</p>
        </footer>
    )
}
// makes it able to export elsewhere
export default Footer