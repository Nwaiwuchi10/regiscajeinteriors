import {
  Button,
  Checkbox,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./Layout.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { projectApi } from "../Data/Api";
import CircularIndeterminate from "../components/Loading/Progress";
import CreateLayout from "./CraeteLayout";

const CreateProject = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);
  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };
  const uploadimage = async (e: any) => {
    const file = e.target.files[0];
    const base64: any = await convert2base64(file);
    setImage(base64);
    // setImage({ ...image, image: base64 });
    console.log(base64);
    // const reader = new FileReader();
  };
  const convert2base64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  //////

  /////
  const submitHandler: any = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title: title,
      image: image,
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(projectApi, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setTitle("");

          setImage("");

          console.log(res.data);
          toast.success("post sucessful");
          navigate("/");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          "Failed to create a post, check your network connection or input the correct textfields"
        );
      });
  };
  return (
    <CreateLayout>
      <section className="h-100 h-custom" style={{ backgroundColor: "white" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                {/* <img
                    src={Sfc}
                    class="w-100"
                    style={{
                      borderTopLeftRadius: ".3rem",
                      borderTopRightRadius: ".3rem",
                      height: "20vh",
                      objectFit: "contain",
                    }}
                    alt="Sample photo"
                  /> */}
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 d-flex justify-content-center">
                    Create a Project Blog
                  </h3>
                  <p
                    className="d-flex justify-content-center"
                    style={{ marginLeft: "15px", marginBottom: "10PX" }}
                  >
                    *pls all the blanck inputs are been required*
                  </p>
                  <form onSubmit={submitHandler}>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        id="outlined-required"
                        label="Project Title "
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="">Project Photo</label>
                      <TextField
                        className="input-label-input-divs"
                        required
                        id="outlined-required"
                        type="file"
                        //   accept=".jpeg, .png, .jpg, "
                        onChange={(e) => uploadimage(e)}
                        //   defaultValue="Match Day"
                      />
                    </div>

                    {loading ? (
                      <CircularIndeterminate />
                    ) : (
                      <div
                        className="d-flex justify-content-center"

                        // onClick={handleLoader}
                      >
                        <Button
                          onSubmit={handleLoader}
                          type="submit"
                          variant="contained"
                          className="input-label-input-divs-btn"
                        >
                          Upload
                        </Button>
                        {/* <ToastContainer /> */}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CreateLayout>
  );
};

export default CreateProject;
