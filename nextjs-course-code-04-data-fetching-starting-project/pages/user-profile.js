
function UserProfilePage(props){
    return <h1>{props.username}</h1>
}

export default  UserProfilePage

export async function getServerSideProps(context){
    // context 可以拿到很多值是个很大的对象
    // 比如 可拿到 params req res cookie
    return {
        props: {
            username: 'Marxu'
        }
    }
}