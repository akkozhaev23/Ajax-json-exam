const AddUsers = async () => {
    if (firstName.value === '' || lastName.value === '' || country.value === '' || city.value === '' || zip.value === '' || phone.value === '' || email.value === '') {
        return alert('Заполните все поля')
    }
    let params = (new URL(document.location)).searchParams
    let id = params.get('id')
    const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
}