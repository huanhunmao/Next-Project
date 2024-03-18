
function UserIdPage(props){
    return <h1>{props.id}</h1>
}

export default UserIdPage

export function getServerSideProps(context){
    const { params } = context

    const userId = params.uid

    return {
        props: {
            id: 'userId' + '-' + userId
        }
    }
}