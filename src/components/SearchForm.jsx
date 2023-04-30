import React from 'react'

const SearchForm = () => {
    return (
        <div className="input-group d-flex justify-content-center">
            <div className="form-outline">
                <input type="search" id="form1" className="form-control me-2" placeholder='Usta Ara' style={{width:"32rem"}} />
                {/* <label className="form-label" for="form1">Search</label> */}
            </div>
            <button type="button" className="btn btn-danger">
                <i className="fas fa-search"></i>
                SUBMIT
            </button>
        </div>
    )
}

export default SearchForm