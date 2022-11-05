import axios from "axios";
import {
    REGISTER_EDUCTIONCOLLECTION_REQUEST,
    REGISTER_EDUCTIONCOLLECTION_SUCCESS,
    REGISTER_EDUCTIONCOLLECTION_FAILURE,
  } from "../types/educationCollectionTypes";
export const educationCollectionAction = (data, history) => async (dispatch) => {
  const {studentName}=data 
  const {age}=data
  const {gender}=data
  const {subject}=data
  const {level}=data
  try {
    dispatch(educationCollectionRequest());
    const token = await localStorage.getItem("access-token");
    let headers;
    if (token) {
      headers = {
        "Content-Type": "application/json",
        "token": `${token}`,
      };
    } else {
      headers = {
        "Content-Type": "application/json",
      };
    }

console.log("our data",data)
    const res = await axios.post(
      `http://localhost:2345/educationCollection/education`,
      { 
    studentName:studentName,
    age:age,
    gender:gender,
    subject:subject,
    level:level,
       },
      {
        headers: headers,
      }
    );
    const education = await res.data;
    dispatch(educationCollectionSuccess({ data: education.data }));
    alert("Student successfully");
    
   
  } catch (err) {
    console.log(err);
    if (err.response) {
      const errorMessage = await err.response.data.message;
      dispatch(educationCollectionFailure(errorMessage));
    } else {
      dispatch(educationCollectionFailure("Network  Error"));
    }
  }
};

export const educationCollectionRequest = () => {
  return {
    type: REGISTER_EDUCTIONCOLLECTION_REQUEST,
  };
};

export const educationCollectionSuccess = (education) => {
  return {
    type: REGISTER_EDUCTIONCOLLECTION_SUCCESS,
    payload: education,
  };
};
export const educationCollectionFailure = (error) => {
  return {
    type: REGISTER_EDUCTIONCOLLECTION_FAILURE,
    payload: error,
  };
};