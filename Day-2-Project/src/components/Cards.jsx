import React from "react";

const Card = ({ job }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={job.logo} alt={job.company} />

        <button>
          Save
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8aGhoAAAD5+flAQEAPDw+IiIiFhYVcXFxhYWEYGBgEBAQUFBQKCgrx8fH29va8vLzZ2dkjIyM1NTXn5+d+fn7g4OAvLy9OTk6ampqvr69oaGikpKTExMSQkJB3d3dHR0d4jCLWAAADJUlEQVR4nO2b65KqMAyAtwEUkIuACCqK7/+Upxd0vUKAlLM/8jmzMztusx9tGkDDzw/DMAzDMAzDMAzD/HmctHs5Lz/vv7y+bBudL6fAH0lwupztGWUtAMTeaGI5rM3sOK1yCMVEQshXFpSyQiuFUbwZSRzpgVCQT1ZWxTKyB3FVByOpqxgiOXhTEVtluSfDgtvsp4zeNy6oQ8pJrZxaBo3gkEwNkBzUZEFNWR4OyinczgmxDWVmwYHKSB6nUIc5y0laqQMTk+f6jYuMB+u5UdYqyoXCR+NGIip2c6PsChnGpfBRZIJiovRUhYJqAx7VvBMEy1Sc4/w4Grn3Qkjnx0nlOYFs/61AphRBhUllUgHVKVDmgucSSDmux1IoWAoLS2FhKSwshYWlsLAUFpbCwlJYWAoLS2FhKSwshYWlsLAUFpbCwlJYWAoLS2FhKSwshYWlsPwHqWTw6+HlpY5VNfT94uJSJXgelH9KKjmpDg0Bp94lXFZqX4Fp/oGqr+1kUalzrppzQInFeU//1pJSjWpjCWG1Ur1METR/QWptXA7qW/lQ2X3tYFhMaufrVRN61c5Cr6P/pdljKan9FXR+d60Umc54uH5O94WktqB7vfz7m46ZOPiY7stIHTc6xduH7o601Sm2+VTdl5BySv3/45ft1hjT8r0PZQEpJzAr9dbrdTZrGryPsC7Vk9Mv2b+cVFfF64+7f1d/rO62pXQzYvS9Tpbm/ee+JMtSl6Ezyu3c89SCZ1UqMcUo721n3Jr19R8uZmxK7evPefxCtxPq3z+zKHUGPQXB4CV5ErxUd3tSXW1sMXc37XN1tSXlDF40PaHTXYo4NqVSTIo/ckv31J5Upju4oRjR/70v9BA3syXVVfHTqIbd3ele3W1IdfWwHTu8vaUhudQ1GZfijzTmnLNKrrRSkWtWQUxq/T2GZt1d2o5YYcKOSfFHzN1qrHr3KaVE323KMOamR9BLDX1+0U9pngSilZqU4o/cqjuNk2r97v+QAIcuc2RSDXhA8RyOvJjx5s73Lwd/TfJoSVL6hA/OkD0YZP0BRIZhGIZhGIZhGIaZxj/GCTBP7s+DwgAAAABJRU5ErkJggg=="
            alt="save"
          />
        </button>
      </div>

      <div className="middle">
        <h1>
          {job.company} <span>{job.date}</span>
        </h1>

        <h2>{job.role}</h2>

        <div className="tags">
          <h4>{job.time}</h4>
          <h4>{job.level}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h2>{job.pay}</h2>
          <h4>{job.location}</h4>
        </div>

        <button>Apply</button>
      </div>
    </div>
  );
};

export default Card;
