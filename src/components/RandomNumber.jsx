function RandomNumber() {
  const randomNum = Math.ceil(Math.random() * 100)
  return <p>Your random Number is {randomNum}</p>
}

export default RandomNumber