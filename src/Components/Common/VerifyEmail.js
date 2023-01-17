import { useNavigate } from 'react-router-dom'
import './VerifyEmail.css'

function VerifyEmail() {
  const navigate = useNavigate('')

  //Temporary function 
  //Navigate to login when resend email is sent
  const handleVerification = (e) => {
    e.preventDefault()

    navigate('/login')
  }

  return (
    <div className='center'>
      <div className='verifyEmail'>
        <h1>Verify your Email Address</h1>
        <p>
          <span><strong>A Verification email has been sent to: </strong></span><br/>
        </p>
        <span>Follow the instruction in the email to verify your account</span>
        <button onClick={handleVerification}>Resend Email</button>
      </div>
    </div>
  )
}

export default VerifyEmail