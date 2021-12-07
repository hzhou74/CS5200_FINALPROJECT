// TODO: declare URL where server listens for HTTP requests
const Membership_URL = "http://localhost:8080/api/membership_plan"

// TODO: retrieve all users from the server
export const findAllMemberships = () =>
    fetch(Membership_URL)
    .then(response => response.json())

// TODO: retrieve a single user by their ID
export const findMembershipById = (id) =>
    fetch(`${Membership_URL}/${id}`).then(response => response.json())




// TODO: delete a user by their ID
export const deleteMembership = (id) =>
    fetch(`${Membership_URL}/${id}`, {
        method: "DELETE"
    })



// TODO: create a new user
export const createMembership = (membership) =>
    fetch(Membership_URL, {
        method: 'POST',
        body: JSON.stringify(membership),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a user by their ID
export const updateMembership = (id, membership) =>
    fetch(`${Membership_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(membership),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllMemberships,
    findMembershipById,
    deleteMembership,
    createMembership,
    updateMembership
}
