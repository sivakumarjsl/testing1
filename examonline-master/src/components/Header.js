import React, {Component} from 'react';

const Header = () => {
    return(
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <div>
                <h4>Entrance - Mock Test</h4>
                <a style={{color:'blue', textDecoration:'underline'}} href="#">Read Instructions</a>
            </div>
            <img src="/chemistry.jpg" className="mb-2" height="100px" width="150px"/>
        </div>
    )
}

export default Header;