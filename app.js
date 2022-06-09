let btn = document.querySelector('#btn')

let params = (new URL(document.location)).searchParams
let id = params.get('id')


const getSingleUser = async () => {
    const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${id}`)
    const result = await response.json()

    console.log({ result })

    let avatar = document.querySelector('#img')
    let firstName = document.querySelector('#firstName')
    let lastName = document.querySelector('#lastName')
    let country = document.querySelector('#country')
    let city = document.querySelector('#city')
    let zip = document.querySelector('#zip')
    let phone = document.querySelector('#phone')
    let email = document.querySelector('#email')

    firstName.value = result.firstName
    lastName.value = result.lastName
    country.value = result.country
    city.value = result.city
    zip.value = result.zip
    phone.value = result.phone
    email.value = result.email
    avatar.src = result.avatar
}




const updateUser = async () => {
    if(firstName.value === '' || lastName.value === '' || country.value ==='' || city.value === '' || zip.value === '' || phone.value === '' || email.value === '') {
        return alert('Заполните все поля')
    } 
    try {
        let params = (new URL(document.location)).searchParams
        let id = params.get('id')
        const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
                country: country.value,
                city: city.value,
                zip: zip.value,
                phone: phone.value,
                email: email.value
            })
        })
        const content = await response.json()
    } catch (e) {
        console.error('error', e)
    }
}





getSingleUser()