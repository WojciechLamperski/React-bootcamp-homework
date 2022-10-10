import users from './users';

export const People = () => {
    console.log (users);
    return(
        <div className='users'>
            <h1>USERS:</h1>
            {users.map(function(user){
                return <div className={'user ' + 'user' + user.id} >{user.username}</div>
            })}
        </div>
    );
}