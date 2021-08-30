import React from 'react'

// CODE WITH HARRY LOGIC
/*
Const[mystyle, setMystyle] = useState({
Color: ‘black’
BackgroundColor: ‘white’})
Const[btnText, SetBtnText] = useState(“Enable Dark mode”)
Const toogleStyle = {}=>{
    if(myStyle.color === ‘black’){
        setMyStyle({
        Color: ‘white’,
        backgroundColor: ‘black’,
        Border; ‘1px solid white’
    })
    setBtnText(“Enable Light Mode”)} 
    else{SetMyStyle({
        Color: ‘back’,
        backgroundColor: ‘white’})
    })
    Set BtnText(“Enable Dark Mode”)}

*/
function darkModeBtn() {
    let btn_color_changer = document.getElementsByClassName("btn")
    let navLinks = document.getElementsByClassName("navlinks");
    let drak_light_switch = document.getElementById("drak_light_switch");
    let searchBtn = document.getElementById("search_btn");
    let html = document.getElementsByTagName('html')[0]
    let search_inp = document.getElementById("search_input")
    if (html.style.background === "white"){
        for (const element of navLinks) {
            element.style.color = 'white'

        }
        for (const iterator of btn_color_changer) {
            iterator.style.background = 'none'
        }
        searchBtn.style.color = 'white'
        search_inp.style.color = 'white'
        html.style.background = "black"
        html.style.color = 'white'
        drak_light_switch.innerText = "Light Mode"
    }
    else {
        for (const element of navLinks) {
            element.style.color = 'black'
            
        }
        for (const iterator of btn_color_changer) {
            iterator.style.background = '#FF5200'
        }
        search_inp.style.color = 'black'
        searchBtn.style.color = 'black'
        html.style.background = "white"
        html.style.color = 'black'
        drak_light_switch.innerText = "Dark Mode"

    }


}
export default function About() {
    return (
        <>
            <div id="about" className="aboutDiv">
                <h1>About Us</h1>
                <p id='creator_name_para'>Website creator is Veer Khatri </p>
                <p className="about_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt non, numquam quam, impedit eaque totam odio aliquam illum voluptas cumque doloribus officia ab temporibus qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia voluptate incidunt alias vero assumenda doloribus dolore provident beatae, magni nesciunt molestiae nisi vitae possimus, pariatur sed, praesentium accusamus? Debitis in tenetur, quos autem perferendis error sapiente eius nulla obcaecati modi dolores animi, ut suscipit eveniet ab repellendus porro? Blanditiis reiciendis animi pariatur id non veniam consequuntur quam molestias suscipit expedita accusamus iste, quo ab laboriosam.</p>
                <button id='drak_light_switch' className="btn" onClick={darkModeBtn}>Dark Mode</button>
            </div>
        </>
    )
}
