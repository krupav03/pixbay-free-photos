import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=30213695-97784137d0aba737452e84116&q=${imgname}&image_type=photo`
      )
      .then((res) => setData(res.data.hits));
  }, []);
  let { imgname } = useParams();
  return (
    <div className="card-container">
      {data &&
        data.map((imgObj) => (
          <div className="card">
            <img
              className="card-img-top"
              src={imgObj.largeImageURL}
              alt="card-body"
              height="300"
            />

            <div className="card-body">
              <h5 className="card-title">
                <span class="badge bg-dark"> {imgObj.tags} </span>
              </h5>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Search;
