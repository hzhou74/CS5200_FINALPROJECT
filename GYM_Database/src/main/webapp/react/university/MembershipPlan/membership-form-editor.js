import memberService from "./membership-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const MembershipFormEditor = () => {
    // const history = useHistory()
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findMemberById(id)
        }
    }, []);
    const findMemberById = (id) =>
        memberService.findMemberById(id)
            .then(user => setUser(user))
    const deleteMember = (id) =>
        memberService.deleteMember(id)
            .then(() => history.back())
    const createMember = (user) =>
        memberService.createMember(user)
            .then(() => history.back())
    const updateMember = (id, newUser) =>
        memberService.updateMember(id, newUser)
            .then(() => history.back())


    return (
        <div>
            <h2>User Editor</h2>
            <label>ID</label>
            <input value={user.id}/><br/>
            <label>First Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, firstName: e.target.value}))}
                value={user.firstName}/><br/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, lastName: e.target.value}))}
                value={user.lastName}/><br/>
            <label>Username</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, username: e.target.value}))}
                value={user.username}/><br/>
            <label>Password</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, password: e.target.value}))}
                value={user.password}/><br/>
            <label>Email</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, email: e.target.value}))}
                value={user.email}/><br/>
            <label>Date of Birth</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, dob: e.target.value}))}
                value={user.dob}/><br/>

            <button className="btn btn-warning"
                onClick={() => {
                    history.back()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                onClick={() => deleteMember(user.id)}>
                Delete
            </button>
            <button className="btn btn-primary"
                onClick={() => createMember(user)}>
                Create
            </button>
            <button className="btn btn-success"
                onClick={() => updateMember(user.id, user)}>
                Save
            </button>
        </div>
    )
}

export default MembershipFormEditor
