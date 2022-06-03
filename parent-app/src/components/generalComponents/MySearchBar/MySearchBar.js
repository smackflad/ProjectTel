import './MySearchBar.css';
import { useState } from "react";

const MySearchBar = () => 
{
    return (
		<div className="MySearchBar-external">
            <input type="text" placeholder='Αναζήτηση'/>
            <span className="material-symbols-outlined MySearchBar-icon">
              search
            </span>
        </div>
	);
};

export default MySearchBar;