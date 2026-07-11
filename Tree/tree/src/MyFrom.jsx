const MyForm = () => {
    return (
        <fieldset>
            <legend>New Student</legend>
            
            <label>Name</label>
            <input type="text"/>

            <label>Father Name</label>
            <input type="text"/>

            <label>Age</label>
            <input type="number"/>

            <button>Submit</button>
        </fieldset>
    )
}
export default MyForm