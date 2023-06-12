import { interpolate } from "src/utils/general";
import { URL } from "./endpoints";

export const fetchPostcodeDetails = async (postcode) => {
  try {
    const response = await fetch(
      interpolate(URL.POSTCODE.GET_DETAILS, { postcode })
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

export const autocompletePostcode = async (postcode) => {
  try {
    const response = await fetch(
      interpolate(URL.POSTCODE.AUTOCOMPLETE_POSTCODE, { postcode })
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchNearestPostcodes = async (postcode) => {
  try {
    const response = await fetch(
      interpolate(URL.POSTCODE.GET_NEAREST_POSTCODES, { postcode })
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

export const validatePostcode = async (postcode) => {
  try {
    const response = await fetch(
      interpolate(URL.POSTCODE.VALIDATE_POSTCODE, { postcode })
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};
