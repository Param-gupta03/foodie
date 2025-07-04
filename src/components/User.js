const User=({name,location})=>
{
    return(
        <div className="user-card">
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
        </div>
    )
}
export default User;