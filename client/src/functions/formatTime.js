const formatTime = (inputTime) => {
    const [hours, minutes] = inputTime.split(':');
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(new Date(0, 0, 0, hours, minutes));
    return formattedTime;
  };

export default formatTime;
