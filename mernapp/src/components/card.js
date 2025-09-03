import React from 'react'

export default function Card() {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        {/* Card image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxf_AfGl3ca1FkzNvkLgQplvYkPH7VupVEpQ&s"
          className="card-img-top"
          alt="food"
          style={{ height: "200px", objectFit: "cover" }} // keeps uniform image size
        />

        {/* Card body */}
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">react text.</p>

          {/* Dropdown + Price Section */}
          <div className="d-flex justify-content-between align-items-center">
            <select className="m-2 h-100 bg-primary rounded text-white">
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select className="m-2 h-100 bg-primary rounded text-white">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>

            <div className="fs-5">Total price</div>
          </div>
        </div>
      </div>
    </div>
  )
}
