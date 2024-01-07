import React, { Component } from 'react'

export default class NewsItems extends Component {

  render() {
    let { imageUrl, newsUrl, author, date, source } = this.props
    return (
      <div>
        <div className="my-2">
          <div className="card">
          <div style={{display:"flex",justifyContent:"flex-end", position:"absolute",right:0}}>
                <span className="badge rounded-pill bg-danger" style={{ left: '100%', zIndex: "3" }}>
                  {source}
                </span>
                </div>
            <img src={!imageUrl ? "//c.ndtvimg.com/2023-05/juuf5mu_us-capitol-afp_625x300_29_May_23.jpg" : imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}..</p>
              <p className="card-text"><small>By {!author ? "unknow" : author} on {new Date(date).toGMTString()} </small></p>
              <a href={newsUrl} target='blank' className=" btn btn-sm btn btn-dark">Read More</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
