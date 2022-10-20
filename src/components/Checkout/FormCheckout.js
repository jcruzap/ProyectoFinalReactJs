const FormCheckout = ({ createOrder, buyer, setBuyer }) => {

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }


    return (
        <div className='form'>
            <h1>Complete the form</h1>
            <form className="justify-content-md-center" onSubmit={handleSubmit}>
                <div className='data'>
                    <label>First Name</label>
                    <input
                        required
                        type="text"
                        name='firstName'
                        placeholder="First name"
                        value={buyer.firstName}
                        onChange={handleChange}
                    />
                    <label>Last name</label>
                    <input
                        required
                        type="text"
                        name='lastName'
                        onChange={handleChange}
                        value={buyer.lastName}
                        placeholder="Last name"
                    />
                    <label>Address</label>
                    <input
                        type="text"
                        placeholder="Address"
                        name='address'
                        value={buyer.address}
                        onChange={handleChange}
                        required
                    />
                    <label>Phone</label>
                    <input
                        type="number"
                        placeholder="Phone"
                        name='phone'
                        value={buyer.phone}
                        onChange={handleChange}
                        required
                    />

                </div>
                <div className='formButton'>

                    {(buyer.firstName && buyer.lastName && buyer.address && buyer.phone) && <button className="button" onClick={() => createOrder()}>Submit</button>}
                </div>
            </form>
        </div>
    )
}

export default FormCheckout