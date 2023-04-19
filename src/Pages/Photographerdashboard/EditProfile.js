import React from "react";
import MiniDrawer from "./MiniDrawer";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function EditProfile() {
  const [open, setOpen] = useState(false);
  const userData = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  const [userDetails, setUserDetails] = useState(userData);
  // Avatar Image Set
  const [image, setImage] = useState("");

  //Dialog Box Open and Close Function
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const updateUserProfile = async () => {
    let response = await setDoc(doc(db, "user", userDetails.id), userDetails);
    localStorage.setItem("user", JSON.stringify(userDetails));
    alert("Update SuccessFully");
    debugger;
  };
  return (
    <div>
      <div className="flex mb-[80px] align-middle">
        <MiniDrawer />
        <div>
          <div className=" mx-auto text-left">
            <h1 className="font-bold text-xl  my-5 mx-20">
              Edit Personal Details :
            </h1>
            {/* <button className="  text-white text bg-blue-500 border-0  px-6  hover:bg-blue-600 text-center py-3 rounded background-green hover:background-green-dark focus:outline-none my-4">
                Save
              </button> */}
          </div>
          <div className="flex flex-col text-center w-full mb-5 -mt-8">
            {/* <Stack direction="row" className="text-center place-content-center">
              <Avatar
                className="ring-offset-2 ring-2 ring-cyan-600"
                alt="Raj Shah"
                src="/static/images/avatar/1.jpg"
                // alt={image}

                // src={setImage}

                sx={{ width: 60, height: 60 }}
              />
            </Stack> */}
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              className="h-16 w-16 rounded-full object-cover mt-8 lg:ml-[230px] ml-[50px] ring-2 ring-blue-500 items-left ring-offset-2"
            />
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2  w-1/2  text-left">
                <div>
                  <div className="p-2 w-full">
                    <button
                      className="flex mx-auto mb-8 mr-10 text-white bg-blue-500 border-2  py-2 px-8 focus:outline-none hover:bg-white rounded hover:text-[#4484CE]"
                      onClick={handleClickOpen}
                    >
                      Upload Image
                    </button>
                    {/* --------------------DialogBox--------------------------------- */}
                    <BootstrapDialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <BootstrapDialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                      >
                        Upload Image
                      </BootstrapDialogTitle>
                      <DialogContent dividers>
                        <Typography gutterBottom>
                          <input
                            accept="/image/*"
                            //   className={classes.input}
                            id="contained-button-file"
                            // multiple
                            type="file"
                            onChange={(event) => {
                              const file = event.target.files[0];
                              if (
                                file &&
                                file.type.substring(0, 5) === "image"
                              ) {
                                setImage(file);
                              } else {
                                setImage(null);
                              }
                            }}
                          />
                        </Typography>
                      </DialogContent>
                      <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                          Upload
                        </Button>
                      </DialogActions>
                    </BootstrapDialog>
                  </div>
                </div>
              </div>
              <div className="p-2 w-1/2 text-left">
                <div className="relative">
                  <div className="p-2 w-full">
                    <button className="flex mx-auto  mb-8 ml-8 border-2 border-blue-500 text-blue-500 bg-cyan-600/16  py-2 px-8 focus:outline-none hover:bg-blue-500 rounded hover:text-white">
                      Remove Image
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mx-20 ">
            <input
              defaultValue={
                localStorage.getItem("user") &&
                JSON.parse(localStorage.getItem("user"))
                  ? JSON.parse(localStorage.getItem("user")).personname
                  : ""
              }
              type="text"
              class="block border border-gray-400 w-1/2 min-w-1/2 p-3 rounded mr-10 mb-4"
              name="firstname"
              placeholder="First Name"
            />
          </div>
          <input
            defaultValue={userDetails.email}
            type="email"
            class="block border border-gray-400  w-full min-w-full p-3 rounded mb-4 mx-20"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setUserDetails((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
          <input
            defaultValue={userDetails.username}
            type="text"
            class="block border border-gray-400 w-full min-w-full p-3 rounded mb-4 mx-20"
            name="username"
            placeholder="username"
            onChange={(e) =>
              setUserDetails((prevState) => ({
                ...prevState,
                username: e.target.value,
              }))
            }
          />
          <input
            defaultValue={userDetails.expertise}
            type="text"
            class="block border border-gray-400 w-full min-w-full p-3 rounded mb-4 mx-20"
            name="expertise"
            placeholder="expertise"
            onChange={(e) =>
              setUserDetails((prevState) => ({
                ...prevState,
                expertise: e.target.value,
              }))
            }
          />

          <input
            defaultValue={userDetails.experience}
            type="text"
            class="block border border-gray-400 w-full min-w-full p-3 rounded mb-4 mx-20"
            name="experience"
            placeholder="experience in Year (Only Number)"
            onChange={(e) =>
              setUserDetails((prevState) => ({
                ...prevState,
                experience: e.target.value,
              }))
            }
          />

          <div className="flex mx-20">
            <input
              defaultValue={
                localStorage.getItem("user") &&
                JSON.parse(localStorage.getItem("user"))
                  ? JSON.parse(localStorage.getItem("user")).area
                  : ""
              }
              type="text"
              class="block border border-gray-400 w-1/2 min-w-1/2 p-3 rounded mb-4"
              name="area"
              placeholder="area"
            />
          </div>

          <button
            onClick={updateUserProfile}
            className=" text-center text-white text bg-blue-500 border-0 ml-[100px]  px-6  hover:bg-blue-600 py-3 rounded background-green hover:background-green-dark focus:outline-none my-4"
          >
            Save
          </button>
          
        </div>
        
      </div>
    </div>
  );
}

export default EditProfile;
