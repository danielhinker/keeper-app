import React from "react";

function Footer() {

    let date = new Date()
    let currentYear = date.getFullYear()
    
    return (
        <footer>Copyright © {currentYear}</footer>
    )
}

export default Footer;