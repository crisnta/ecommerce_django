import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import { check_authenticated, load_user, refresh } from '../redux/actions/auth'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'

const Layout = (props) => {
    useEffect(() => {
      props.refresh()
      props.check_authenticated()
      props.load_user()
    }, [])
    return (
        <div>
            <Navbar/>
            <ToastContainer autoCloset={5000} />
            {props.children}
            <Footer/>
        </div>
        )
}
export default connect(null, {
    check_authenticated,
    load_user,
    refresh
}) (Layout)