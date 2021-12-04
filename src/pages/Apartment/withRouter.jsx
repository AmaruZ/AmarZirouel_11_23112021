import { useParams } from 'react-router'

export function withRouter(Child) {
    return (props) => {
        const id = useParams('id')
        return <Child {...props} id={id} />
    }
}
