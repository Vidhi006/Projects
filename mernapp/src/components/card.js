import React from 'react'

export default function card() {
    return (
        <div>
            <div>
                {/* Bootstrap card with inline CSS styles */}
                <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>

                    {/* In JSX, {} allows us to write JavaScript code inside HTML-like code */}
                    {/* This is just a comment, not visible in browser */}
                    <img src="..." className="card-img-top" alt="..." />

                    {/* Card content */}
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">react text.</p>

                        {/* Dropdown Section */}
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-primary rounded'>
                                {
                                    // Generating options dynamically (1 to 6)
                                    // Array.from(Array(6)) creates an array [0,1,2,3,4,5]
                                    // (i) => { return <option> } runs for each element
                                    Array.from(Array(6), (e, i) => {
                                        return (
                                            // Each option has a unique key (important in React lists)
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1} {/* shows number in dropdown */}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            <select className='m-2 h-100 bg-primary rounded'>
                                <option value="half">Half</option>
                                <option value="full">full</option>
                            </select>
                            {/* Here we wrote JS code inside JSX and returned HTML elements */}
                            <div className='d-inline h-100 fs-5'>Total price</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
