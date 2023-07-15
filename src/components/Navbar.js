import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import '../css/Navbar.css'
import { faHeart, faMobile, faShuffle, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function TextLinkExample() {
    return (
        <Navbar className="bg-body-tertiary line">
            <Container>
                <div className='leftnav'>
                <Form.Select>
                    <option value="English">English</option>
                    <option value="FR">France</option>
                    <option value="US">Unit States</option>
                </Form.Select>

                <Form.Select className='ms-2'>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBR">GBR</option>
                </Form.Select>
                <span className='mobile'><FontAwesomeIcon icon={faMobile} size="sm" style={{color: "grey"}} /></span>
                <span className='telenum'>1234567890 </span>
                </div>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <div className='nav-right-1'>
                    <span><FontAwesomeIcon icon={faShuffle} />   compare</span>
                    <span><FontAwesomeIcon icon={faHeart} />  wishlist</span>
                    <span><NavLink to="/login"><FontAwesomeIcon icon={faUser} />  login</NavLink></span>
                </div>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
);
}

export default TextLinkExample;