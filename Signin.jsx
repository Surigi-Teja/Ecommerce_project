import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min"
function Signin() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "350px" }}>
        <h3 className="text-center">Sign In</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
        </form>
        <div class="text-center mt-3">
            <a href="#" class="text-decoration-none">Forgot Password?</a>
            <p class="mt-2">Don't have an account? <a href="#" class="text-decoration-none">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signin;