import React from 'react'
import {Link} from "react-router-dom";

const AllTask = () => {
  return (
    <div>
                  <div>
                <p>Title</p>
                <input 
                    type="text"
                    placeholder="Task Title"
                    required
                />
            </div>
            <div>
                <p>content</p>
                <input 
                    type="text"
                    placeholder="Content;"
                    required
                />
            </div>
    </div>
  )
}

export default AllTask