import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'My Home', username: 'Living Room', device: '1', plugin: '2' }
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
	const [ showCardDetails, setShowCardDetails] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
		setShowCardDetails(false)

	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	const showCard =() => {
		setShowCardDetails(!showCardDetails)
	}

	const addNew = () => {
		showCard();
	}

	return (
		<div className="container main">
			<div className="container flex header-content">
				<div className="col-lg-3">
					<h2>Dashboard</h2>
					<label className="sub-title">Welcome to my dashboard</label>
				</div>
				<div className="col-lg-9 text-right btn-margin">
					<button className="add-button" onClick={addNew}>Add New</button>
				</div>
			</div>
			<div className="flex-row">
				<div className="flex-large flex-details">
					{editing ? (
						<Fragment>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (showCardDetails) ?
						(<Fragment>
							<AddUserForm addUser={addUser} />
						</Fragment>):  '' }
				</div>
				<div className="flex-large">
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
