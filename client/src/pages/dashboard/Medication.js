export default function Medication(props){
    const {name, dName, date, time } = props;
        return (
            <>
            <div>
                <div className='dash-body'>
            <div className='dash-text'>
                <h2>Hello {name}! Welcome</h2>
                <p>Your next appointment with Dr. 
                    {dName} is scheduled for {date}, {time}</p>
            </div>
          </div>
          <div className="active-med" >
            <p>Active Medication</p>
          </div>
        </div>
            </>
        )
}