import React from 'react'
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom'

export default function navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.myMode} bg-${props.myMode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.value}</Link>
          </li>
  <div className={`form-check form-switch text-${props.myModeode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault  onClick={props.toggle}"  onClick={props.toggle}/>
  <label className="form-check-label" intFor="flexSwitchCheckDefault">Enable Light</label>
</div>
        </ul>
      </div>
    </div>
  </nav>
  )
}




// import React from 'react'

// // import { Link } from 'react-router-dom'

// export default function navbar(props) {
//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${props.myMode} bg-${props.myMode}`}>
//     <div className="container-fluid">
//       <a className="navbar-brand" href="/">{props.title}</a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <a className="nav-link" href="#">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">{props.value}</a>
//           </li>
//   <div className={`form-check form-switch text-${props.myModeode==='light'?'dark':'light'}`}>
//   <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault  onClick={props.toggle}"  onClick={props.toggle}/>
//   <label className="form-check-label" intFor="flexSwitchCheckDefault">Enable Light</label>
// </div>
//         </ul>
//       </div>
//     </div>
//   </nav>
//   )
// }



