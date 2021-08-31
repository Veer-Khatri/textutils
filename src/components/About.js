import React from 'react'

// CODE WITH HARRY LOGIC
/*
Const[mystyle, setMystyle] = useState({
Color: 'black'
BackgroundColor: 'white'})
Const[btnText, SetBtnText] = useState("Enable Dark mode")
Const toogleStyle = {}=>{
    if(myStyle.color === 'black'){
        setMyStyle({
        Color: 'white',
        backgroundColor: 'black',
        Border; '1px solid white'
    })
    setBtnText("Enable Light Mode")} 
    else{SetMyStyle({
        Color: 'back',
        backgroundColor: 'white'})
    })
    Set BtnText("Enable Dark Mode")}

    */

export default function About() {
    return (
        <>
            <div id="about" className="aboutDiv">
                <h1>About Us</h1>
                <p id='creator_name_para'>Website creator is Veer Khatri </p>
                <p className="about_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt non, numquam quam, impedit eaque totam odio aliquam illum voluptas cumque doloribus officia ab temporibus qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia voluptate incidunt alias vero assumenda doloribus dolore provident beatae, magni nesciunt molestiae nisi vitae possimus, pariatur sed, praesentium accusamus? Debitis in tenetur, quos autem perferendis error sapiente eius nulla obcaecati modi dolores animi, ut suscipit eveniet ab repellendus porro? Blanditiis reiciendis animi pariatur id non veniam consequuntur quam molestias suscipit expedita accusamus iste, quo ab laboriosam.</p>
                {/* <input type="checkbox" name="checkbox" id="dark_light_checkbox" /> */}
            </div>
        </>
    )
}
