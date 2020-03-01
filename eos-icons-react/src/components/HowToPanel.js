import React, { useContext, useReducer } from 'react';


const HowToPanel = props => {
    const state = props.state;
    
    return (
            <>
            {
                <div className="how-to-use-container">
                    <h2 className="h2-how-to-use">How to use it:
                        <small className="right-pulled-small" id="close-code-snippet">
                        <i className="eos-icons md-18">close</i></small>
                    </h2>
                    <div className="how-to-use-input-group">
                        <input className="how-to-use-curved-control" id="copy3" readOnly="readOnly" value = {`<i className='eos-icons'> ${state.singleIcon[0]} </i>`} />
                        <div className="how-to-use-input-group-append">
                            <button className="how-to-use-copy-button" id="copy1" type="button" onClick={ () => { document.getElementById("copy3").select(); document.execCommand('copy'); }}>
                                <i className="eos-icons md-18">content_copy</i> Copy</button>
                        </div>
                    </div>
                    <div className="how-to-use-row">
                        <b className="ml-3">Tags:</b>
                        <div className="tags">
                            {state.icons.map(
                                (icon) => {
                                    if(icon.name === state.singleIcon[0])
                                    return icon.tags.map((tag) => {
                                        return <span className="how-to-use-badge"> {tag} </span>
                                    })
                                }
                            )}
                        </div>
                    </div>
                </div>
            }          
            </>
    )
}

export default HowToPanel