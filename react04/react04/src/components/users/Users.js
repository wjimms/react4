

function Users(props) {
    console.log(props.users);


    return(
        <div>
            <ul>
                {
                    props.users.map((user, key)  => {
                        // console.log(user);
                        return(
                            <li style={{marginBottom:"30px"}} key={key}>
                                <div>
                                    {user.one}
                                    {user.two}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Users;

