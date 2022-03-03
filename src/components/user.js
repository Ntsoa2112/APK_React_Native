import React from 'react'


const contactData = {
  "name": "RAJAONARIVONY",
  "address": {
    "city": "Ankorahotra",
    "country": "Madagascar"
  },
  "avatar": "https://avatars.githubusercontent.com/u/59861055?v=4",
  "avatarBackground":
    "https://thumbs.dreamstime.com/b/feuilles-vert-fonc%C3%A9-d-usine-de-couverture-v%C3%A9g%C3%A9tale-de-mini-herbe-de-mondo-ou-de-sna-91402567.jpg",
  "tels": [
    { "id": 1, "name": "Mobile", "number": "034 22 332 22" }
  ],
  "emails": [
    { "id": 1, "name": "Email", "email": "rivo2302@gmai.com" },
    { "id": 2, "name": "Facebook", "email": "Rivo Lalaina"}
  ]
}

const ProfileScreen = () => <Profile {...contactData} />

ProfileScreen.navigationOptions = () => ({
  header: null,
})

export default ProfileScreen