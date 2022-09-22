const getOTP = (length, option={}) =>{
    let generat_otp = document.getElementById("userphone");
    if(generat_otp.value === ''){
        alert("please enter your phone no")
        return false;
    }
    
    const digits = '0123456789';
    const alpha = 'abcdefghijklmnpqrstuvwxyz';
    const upper = alpha.toLocaleUpperCase();
    const special = '!@#$%^'

    let defaultoption ={
        digits : true,
        alpha : true,
        upper : true,
        special : true
    };
    let optionTwo = {...defaultoption,...option}//separate operator
    //console.log(optionTwo)
    

    let allowChar = ((optionTwo.digits || '') && digits);
        allowChar += ((optionTwo.alpha || '') && alpha);
        allowChar += ((optionTwo.upper || '') && upper);
        allowChar += ((optionTwo.special || '') && special);

    let generatOtp = '';
    while(generatOtp.length<length){
        let random = Math.random();
        let charIndex = Math.floor(random * (allowChar.length -1)+0);
        generatOtp += allowChar[charIndex];
    }

    document.getElementById("result").innerHTML= generatOtp;
}
