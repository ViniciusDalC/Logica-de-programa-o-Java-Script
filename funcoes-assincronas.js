const API_URL = 'https://jsonplaceholder.typicode.com/users'
async function guetUsers () {
  const response = await fetch(API_URL)
  const data = await response.json()
  const userEmails = data.map(({email}) => 
   ({email})
  )
  console.log(userEmails)
}
guetUsers()