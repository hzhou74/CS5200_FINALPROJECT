import membershipService from "./membership-service"

const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;
const MembershipList = () => {
    const history = useHistory()
    const [Membership, setMembership] = useState([])
    useEffect(() => {
        findAllMemberships()
    }, [])
    const findAllMemberships = () =>
        membershipService.findAllMemberships()
            .then(Membership => setMembership(membership))

    return (
        <div>
            <h2>Welcome to GYM!!!</h2>
            <button onClick={() => history.push("/membership_plan/new")}
                    className="btn btn-primary">
                Add New Membership
            </button>
            <ul className="list-group">
                {
                    membership.map(membership =>
                                  <li className="list-group-item"
                                      key={membership.id}>
                                      <Link to={`/membership_plan/${membership.id}`}>
                                          {membership.firstName},
                                          {membership.lastName},
                                          {membership.username},
                                      </Link>
                                  </li>)
                }
            </ul>


        </div>
    )
}

export default MembershipList;
