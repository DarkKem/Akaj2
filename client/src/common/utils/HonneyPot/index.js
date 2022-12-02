import { toast } from "react-toastify"


const SQLInjection=  (input) =>{
    if(input.includes("'--") || input.includes("')") || input.includes("1=1") || input.includes('--')){
        let check=JSON.parse(localStorage.getItem('log_27_33_AE6769'))
        if(!check.hasOwnProperty('y3b9df')){
            check.y3b9df='06788'
            localStorage.setItem('log_27_33_AE6769',JSON.stringify(check))
        }
        return true
    }
    return false
}

const XSSInjection=() =>{
    let url=window.location.href
    let text=url.split('script%3E')
    if(url.includes('%3Cscript%3E')){
        let check=JSON.parse(localStorage.getItem('log_27_33_AE6769'))
        if(!check.hasOwnProperty('Zb96h')){
            check.Zb96h='32843'
            localStorage.setItem('log_27_33_AE6769',JSON.stringify(check))
        }
        alert(text[1].split('%3C/')[0])
                
    }
}

const isAdmin=()=>{
    if (localStorage.getItem('isAdmin')=="True") {
        let check=JSON.parse(localStorage.getItem('log_27_33_AE6769'))
        if(!check.hasOwnProperty('I2BPM')){
            check.I2BPM='94986'
            localStorage.setItem('log_27_33_AE6769',JSON.stringify(check))
        }
        return <p style={{color:'green'}}>Mode admin activé</p>
    }
    return false
}

const robotTXT=()=>{
    let check=JSON.parse(localStorage.getItem('log_27_33_AE6769'))
    if(!check.hasOwnProperty('ra70x')){
        check.ra70x='90442'
        localStorage.setItem('log_27_33_AE6769',JSON.stringify(check))
    }
}
const checkVuln=()=>{
    let count=0
    let check=JSON.parse(localStorage.getItem('log_27_33_AE6769'))
    if(check.hasOwnProperty('ra70x') && check.ra70x=='90442'){
        count++
    }
    if(check.hasOwnProperty('I2BPM') && check.I2BPM=='94986'){
        count++

    }
    if(check.hasOwnProperty('Zb96h') && check.Zb96h=='32843'){
        count++

    }
    if(check.hasOwnProperty('y3b9df') && check.y3b9df=='06788'){
        count++

    }
    if (count==4) {
         toast.success('Bravo toutes les vuln ont été trouvées ! :) ')
        return true
        }
    console.log(count);
    return false
}
export {SQLInjection,XSSInjection,isAdmin,robotTXT,checkVuln}