export default function ProfileImage({tweet}){
    return(
        <img
    src={tweet.user.image}
    className="profile"
    alt="profile"
/>
    )
    
}