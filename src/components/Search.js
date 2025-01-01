import React, { Component } from 'react'

import './Search.css'

export default class Search extends Component {
  render() {
    return (
      <div class="container">

            <div class="row d-flex justify-content-end align-items-center">

              <div class="col-md-6">

                <div class="form">
                  <i class="fa fa-search"></i>
                  <input type="text" class="form-control form-input" placeholder="Search anything..."/>

                </div>
                
              </div>
              
            </div>
            
          </div>
    )
  }
}
