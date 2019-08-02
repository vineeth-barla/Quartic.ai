import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<div className="user-details">
				<label className="margin-10">Name</label>
				<input className="margin-10" type="text" name="name" value={user.name} onChange={handleInputChange} />
				<label className="margin-10">Username</label>
				<input className="margin-10" type="text" name="username" value={user.username} onChange={handleInputChange} />
			</div>
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm
