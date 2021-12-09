import data from './data/profileData.json'

const profile = (state = data, action) => {
    switch (action.type) {
        case "save-profile-changes":
            const profileState = {
                "firstName": action.firstName,
                "lastName" :action.lastName,
                "handle":action.handle,
                "emailAddress":action.emailAddress,
                "profilePicture":action.profilePicture,
                "bannerPicture":action.bannerPicture,
                "bio":action.bio,
                "location":action.location,
                "dateOfBirth":action.birthday,
                "password":action.password,
                "dateJoined": action.dateJoined,
                "followingCount": 69,
                "followersCount": 420,
                "website":action.website
            }
            return(profileState);
        case 'get-profile':
            console.log("reducer print statement: ", action.profile);
            return (action.profile);
        case 'update-profile':
            return (action.profile);
        default:
            return(state);
    }
}

export default profile;