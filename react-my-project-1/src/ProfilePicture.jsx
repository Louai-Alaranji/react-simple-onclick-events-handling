


function ProfilePicture(){
    const imageUrl = "./src/assets/peng.png"
    const handleClick = (e) => e.target.style.display = "none";

    return (<img onClick = {(e) => handleClick(e)} src={imageUrl}/>)

}


export default ProfilePicture;