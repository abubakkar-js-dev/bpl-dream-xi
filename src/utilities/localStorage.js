const getEmailFromLs = () =>{
    const storedMail = localStorage.getItem('email');
    if(storedMail){
        return JSON.parse(storedMail);
    }else{
        return '';
    }
}

const saveEmailToLs = (email) =>{
    const emailStr = JSON.stringify(email);
    localStorage.setItem('email',emailStr);
}

export {getEmailFromLs,saveEmailToLs}
