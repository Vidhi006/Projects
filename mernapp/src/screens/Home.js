// Import React (needed for JSX)
import React from 'react'




// Importing custom components Navbar and Footer
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/card'
import Carousel from '../components/Carousel'



// Exporting Home component as default
// (so we can import it in App.js or anywhere else using: import Home from './Home')
export default function Home() {
  // Every React component must return JSX
  return (
    <div>
      {/* Navbar Section */}
      <div>
        {/* Custom Navbar component */}
        <Navbar />
      </div>

      <div>
        <Carousel/>
      </div>
      {/* Card Section */}
      <div className="container my-3">
        <div className="row">
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div>
        {/* Custom Footer component */}
        <Footer />
      </div>
    </div>
  )
}

