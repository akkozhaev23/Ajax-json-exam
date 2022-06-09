let users = document.querySelector('.users')
let thead = document.querySelector('.thead')
let tbody = document.querySelector('.tbody')


const getUsers = async () => {
    const response = await fetch('https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users')
    const result = await response.json()
    console.table(result)


    result.map(e => {

        let newTr = document.createElement('tr')
        let tdCreatedAt = document.createElement('td')
        let tdFName = document.createElement('td')
        let tdAvatar = document.createElement('img')
        let tdLName = document.createElement('td')
        let tdCountry = document.createElement('td')
        let tdZip = document.createElement('td')
        let tdCity = document.createElement('td')
        let tdPhone = document.createElement('td')
        let tdEmail = document.createElement('td')
        let tdStatus = document.createElement('td')
        let tdId = document.createElement('td')
        let newTd = document.createElement('td')
        let a = document.createElement('a')
        let btn = document.createElement('button')
        let del = document.createElement('button')
        let TdTd = document.createElement('td')




        tdCreatedAt.innerText = new Date(e.createdAt).toLocaleDateString()
        tdFName.innerText = e.firstName
        tdAvatar.src = e.avatar
        tdLName.innerText = e.lastName
        tdCountry.innerText = e.country
        tdZip.innerText = e.zip
        tdCity.innerText = e.city
        tdPhone.innerText = e.phone
        tdEmail.innerText = e.email
        tdStatus.innerText = e.status
        tdId.innerHTML = e.id
        a.href = `index2.html?id=${e.id}`
        a.innerText = 'Update'
        del.innerHTML = 'Delete'
        tdAvatar.classList.add('rounded-circle')
        tdAvatar.classList.add('img-thumbnail')
        btn.classList.add('bg-success')
        btn.classList.add('rounded')
        btn.classList.add('border-0')
        a.classList.add('text-decoration-none')
        a.classList.add('text-light')
        del.classList.add('bg-danger')
        del.classList.add('border-0')
        del.classList.add('rounded')
        del.classList.add('text-light')

        newTr.append(tdCreatedAt)
        newTd.append(tdAvatar)
        newTr.append(newTd)
        newTr.append(tdFName)
        newTr.append(tdLName)
        newTr.append(tdCountry)
        newTr.append(tdCity)
        newTr.append(tdZip)
        newTr.append(tdPhone)
        newTr.append(tdEmail)
        newTr.append(tdStatus)
        newTr.append(tdId)
        btn.append(a)
        TdTd.append(btn)
        TdTd.append(del)
        newTr.append(TdTd)
        tbody.append(newTr)

        del.onclick = async () => {
            const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${e.id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                window.location.href = 'index.html'
            } else {
                alert('false')
            }
        }
    })
}



getUsers()


