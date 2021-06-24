import React from 'react'
import shopLogo from './../../assets/images/shop-icon.png'
import { NavLink, Link } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons'
import './header.scss'
import CartPopup from '../cartPopup/CartPopup'
import { connect } from 'react-redux'
import { togglePopupActionCreator } from '../../redux/headerReducer'

const Header = ({ cart, togglePopup, popupToggler }) => {
  return (
    <div className="header">
      <Link to="/shop">
        <img width="50" src={shopLogo} alt="Shop" />
      </Link>
      <div className="links">
        <NavLink className="link" activeClassName="active" to="/admin">
          Admin
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/shop">
          Տեսականի
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/cart">
          Զամբյուղ
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/contactUs">
          Մեր մասին
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/login">
          Մուտք
        </NavLink>
        <NavLink className="link" activeClassName="active" to="register">
          Գրանցվել
        </NavLink>
        <div className="shopping-cart-content" onClick={togglePopup}>
          <span className="chosen-items-count">{cart.length}</span>
          <ShoppingCartOutlined />
          {popupToggler && <CartPopup />}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    popupToggler: state.header.popupToggler,
  }
}

const mapDispatchToProps = (dispatch) => ({
  togglePopup: () => dispatch(togglePopupActionCreator()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
