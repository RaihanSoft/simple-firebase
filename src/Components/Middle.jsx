/* eslint-disable react/prop-types */
const Middle = ({ loadAuth }) => {
    console.log(loadAuth)

    return (
        <div>
            <h1>{loadAuth.reloadUserInfo.displayName}</h1>
            <img src={loadAuth.reloadUserInfo.photoUrl} alt="" />
            <p>{loadAuth.reloadUserInfo.email}</p>
        </div>
    )
}

export default Middle
