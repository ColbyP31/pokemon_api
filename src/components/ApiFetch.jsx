import React, {useEffect, useState} from 'react';

const ApiFetch = (props) => {
    const [state, setState] = useState(0);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=8070")
        .then(response => response.json())
        .then(response => setState({
            pokemon: response.results
        })
    )
}, []);
    
return(
    <div>
        {state.pokemon ? state.pokemon.map((item, index) => {
                return(<div key={index}>{item.name}</div>)
            }):null}
        </div>
    );
}

export default ApiFetch;