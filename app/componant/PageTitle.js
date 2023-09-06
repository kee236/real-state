import React from 'react'

export default function PageTitle(props) {
  return (
    <>
  {/*Page Title*/}
  <section
    className="page-title"
    style={{ backgroundImage: "url(images/background/6.jpg)" }}
  >
    <div className="auto-container">
      <div className="clearfix">
        <div className="pull-left">
          <h1>{props.name}</h1>
        </div>
        <div className="pull-right">
          <ul className="page-breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>{props.title}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*End Page Title*/}
</>

  )
}
