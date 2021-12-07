// TODO: declare URL where server listens for HTTP requests
const MEMBER_URL = "http://localhost:8080/api/member"

// TODO: retrieve all users from the server
export const findAllMembers = () =>
    fetch(MEMBER_URL)
    .then(response => response.json())

// TODO: retrieve a single user by their ID
export const findMemberById = (id) =>
    fetch(`${MEMBER_URL}/${id}`).then(response => response.json())




// TODO: delete a user by their ID
export const deleteMember = (id) =>
    fetch(`${MEMBER_URL}/${id}`, {
        method: "DELETE"
    })



// TODO: create a new user
export const createMember = (member) =>
    fetch(MEMBER_URL, {
        method: 'POST',
        body: JSON.stringify(member),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a user by their ID
export const updateMember = (id, member) =>
    fetch(`${MEMBER_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(member),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllMembers,
    findMemberById,
    deleteMember,
    createMember,
    updateMember
}
