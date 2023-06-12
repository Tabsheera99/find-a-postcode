import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchNearestPostcodes } from "src/api/postcode";
import Card from "src/components/card";
import Error from "../error";
import "./postcode.css";

const Postcode = () => {
  const [details, setDetails] = useState();
  const { postcode } = useParams();

  const fetchPostcodes = useCallback(async () => {
    const data = await fetchNearestPostcodes(postcode);
    setDetails(data);
  }, [postcode]);
  console.log(details);

  useEffect(() => {
    fetchPostcodes();
  }, [fetchPostcodes]);

  if (details?.status === 404)
    return <Error message={details.error} status={details.status} />;

  if (details?.result)
    return (
      <div>
        <div className="postcode-container font-color">
          <Card data={details?.result.slice(0, 1)} />
        </div>

        <h2 className="heading font-color">Nearest postcodes</h2>
        <div>
          {details?.result.slice(1).length ? (
            <div className="nearest-postcodes-container font-color">
              <Card data={details?.result.slice(1)} />
            </div>
          ) : (
            <div>No nearby postcodes</div>
          )}
        </div>
      </div>
    );

  return null;
};

export default Postcode;
