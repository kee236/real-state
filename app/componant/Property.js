'use client'
import 'font-awesome/css/font-awesome.min.css';
import React from 'react'
import Select from 'react-select'

export default function Property() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <>
  {/*Property Info Tabs*/}
  <section className="property-tabs-section">
    <div className="auto-container">
      <div className="inner-section">
        {/*Property Info Tabs*/}
        <div className="property-search-tab">
          {/*Property Tabs*/}
          <div className="property-tabs tabs-box">
            {/*Tab Btns*/}
            <ul className="tab-btns tab-buttons clearfix">
              <li data-tab="#sale" className="tab-btn active-btn">
                Sale
              </li>
              <li data-tab="#rent" className="tab-btn">
                Rent
              </li>
            </ul>
            {/*Tabs Container*/}
            <div className="tabs-content">
              {/*Tab / Active Tab*/}
              <div className="tab active-tab" id="sale">
                <div className="content">
                  {/* Property Form */}
                  <div className="property-search-form">
                    {/*Form*/}
                    <form
                      method="post"
                      action="https://html.yogsthemes.com/demo/shina-realstate/blog.html"
                    >
                      <div className="row clearfix">
                        {/*Form Group*/}
                        <div  className=" col-md-3 col-sm-4 col-xs-12">
                       
                          <label className="field-label">city</label>
                          {/* <Select  options ={options} /> */}
                          <select className="custom-select-box">
                            <option>Search ID</option>
                            <option>Id One</option>
                            <option>Id Two</option>
                            <option>Id Three</option>
                            <option>Id Four</option>
                          </select>
                         
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label">
                            search by property id
                          </label>
                          <select className="custom-select-box">
                            <option>Search ID</option>
                            <option>Id One</option>
                            <option>Id Two</option>
                            <option>Id Three</option>
                            <option>Id Four</option>
                          </select>
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label">
                            search by Address
                          </label>
                          <select className="custom-select-box">
                            <option>Search ID</option>
                            <option>Id One</option>
                            <option>Id Two</option>
                            <option>Id Three</option>
                            <option>Id Four</option>
                          </select>
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label">Location</label>
                          <select className="custom-select-box">
                            <option>Any</option>
                            <option>New York</option>
                            <option>California</option>
                            <option>Chicago</option>
                            <option>Melborne</option>
                          </select>
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label">Country</label>
                          <select className="custom-select-box">
                            <option>Any</option>
                            <option>New York</option>
                            <option>California</option>
                            <option>Chicago</option>
                            <option>Melborne</option>
                          </select>
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label">Price from</label>
                          <select className="custom-select-box">
                            <option>Any</option>
                            <option>10 - 50</option>
                            <option>50 - 100</option>
                            <option>150 - 200</option>
                            <option>250 - 250</option>
                          </select>
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label">Price to</label>
                          <select className="custom-select-box">
                            <option>Any</option>
                            <option>10 - 50</option>
                            <option>50 - 100</option>
                            <option>150 - 200</option>
                            <option>250 - 250</option>
                          </select>
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label empty"> </label>
                          <button
                            className="theme-btn search-btn"
                            type="submit"
                            name="submit-form"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*End Form */}
                </div>
              </div>
              {/*Tab*/}
              <div className="tab" id="rent">
                <div className="content">
                  {/* Property Search Form */}
                  <div className="property-search-form">
                    {/*Comment Form*/}
                    <form
                      method="post"
                      action="https://html.yogsthemes.com/demo/shina-realstate/blog.html"
                    >
                      <div className="row clearfix">
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label">city</label>
                          <select className="custom-select-box">
                            <option>Any</option>
                            <option>New York</option>
                            <option>California</option>
                            <option>Chicago</option>
                            <option>Melborne</option>
                          </select>
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label">
                            search by property id
                          </label>
                          <select className="custom-select-box">
                            <option>Search ID</option>
                            <option>Id One</option>
                            <option>Id Two</option>
                            <option>Id Three</option>
                            <option>Id Four</option>
                          </select>
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label">
                            search by Address
                          </label>
                          <select className="custom-select-box">
                            <option>Search ID</option>
                            <option>Id One</option>
                            <option>Id Two</option>
                            <option>Id Three</option>
                            <option>Id Four</option>
                          </select>
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label">Location</label>
                          <select className="custom-select-box">
                            <option>Any</option>
                            <option>New York</option>
                            <option>California</option>
                            <option>Chicago</option>
                            <option>Melborne</option>
                          </select>
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label">Country</label>
                          <select className="custom-select-box">
                            <option>Any</option>
                            <option>New York</option>
                            <option>California</option>
                            <option>Chicago</option>
                            <option>Melborne</option>
                          </select>
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label">Price from</label>
                          <select className="custom-select-box">
                            <option>Any</option>
                            <option>10 - 50</option>
                            <option>50 - 100</option>
                            <option>150 - 200</option>
                            <option>250 - 250</option>
                          </select>
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label">Price to</label>
                          <select className="custom-select-box">
                            <option>Any</option>
                            <option>10 - 50</option>
                            <option>50 - 100</option>
                            <option>150 - 200</option>
                            <option>250 - 250</option>
                          </select>
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-3 col-sm-4 col-xs-12">
                          <label className="field-label"> </label>
                          <button
                            className="theme-btn search-btn"
                            type="submit"
                            name="submit-form"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*End Property Form */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Product Info Tabs*/}
      </div>
    </div>
  </section>
  {/*End Property Tab Form*/}
 
</>

  )
}

