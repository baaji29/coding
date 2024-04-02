async function asyncCall() {
    return 'checking';
    // Expected output: "resolved"
  }
  
  const Test = asyncCall();
  console.log(Test.then(value => {
    console.log(value)
  }))