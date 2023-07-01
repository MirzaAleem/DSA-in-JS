// Algorithm to print Divisors of any number with Time Complexity O(sqrt(n))

const printdivisor = (n) =>{
    for (let i = 0; i <= Math.sqrt(n); i++) {
        if (n%i === 0) {
            if (n/i === i) {
                console.log(i)
            }
            else{
                console.log(i + " " + n/i)
            }
        }
        
    }
}

printdivisor(18)