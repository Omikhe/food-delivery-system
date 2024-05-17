function Login(params){

return (
    <form>
        <h2>Log into your account</h2>
        <button>student</button> <button>provider</button>
        <div>
            <label for = "fname">Email:</label><br/>
            <input type = "text" id= "fname" name = "fname"></input><br/>
        </div>
        <div>
            <label for = "lname">Password</label><br/>
            <input type = "text" id= "lname" name = "lname"></input><br/>
        </div>
    </form>
)}
export default Login;