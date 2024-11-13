import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'


import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useState } from "react";
import Middle from '../Components/Middle';
const MainLayouts = () => {




    const [loadAuth, setLoadAuth] = useState([])


    const provider = new GoogleAuthProvider();

    const handleAuth = () => {
        signInWithPopup(auth, provider)
            .then(result => setLoadAuth(result.user))
            .catch(error => console.log(error))

    }

    return (




        <div>
            {/* navbar  */}
            <Navbar handleAuth={handleAuth} />

            {/* dynamic content  */}
            <div className='h-[calc(100vh-290px)]' >
                <Outlet />

            </div>

            <Middle loadAuth={loadAuth}  />

            {/* footer  */}
            <Footer />
        </div>
    )
}

export default MainLayouts
