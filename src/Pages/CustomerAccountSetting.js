import React from "react";
import { useState } from "react";

import Drawer from "./Drawer";
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
import NavigationMenu from "./NavigationMenu";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";

/*--------------------------------Upload Image Dialog Function----------------------------------*/
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

//------------------------------------------------------------------------------------------------
function CustomerAccountSetting() {
  const userData = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  const [userDetails, setUserDetails] = useState(userData);

  const updateUserProfile = async () => {
    let response = await setDoc(doc(db, "user", userDetails.id), userDetails);
    localStorage.setItem("user", JSON.stringify(userDetails));
    alert("Update SuccessFully");
    debugger;
  };
  // Dialog Box Set
  const [open, setOpen] = useState(false);

  // Avatar Image Set
  const [image, setImage] = useState("");

  //Dialog Box Open and Close Function
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="customeraccountsetting-container text-center">
      <NavigationMenu />
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-15 mx-auto text-center">
          {/* ---------------------------------- Left Side Menu Drawer ----------------------------------------- */}

          <div className="w-full text-left p-0 m-0 pt-[5px]">
            <Drawer />
          </div>

          {/* ---------------------------------- Title ----------------------------------------- */}

          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 -mt-10 text-cyan-600 pb-8">
              Account Setting
            </h1>
          </div>

          {/* ---------------------------------- Avatar ----------------------------------------- */}

          <div className="flex flex-col text-center w-full mb-5 -mt-8">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              className="h-16 w-16 rounded-full object-cover lg:ml-[500px] ml-[50px] ring-2 ring-blue-500 items-center ring-offset-2"
            />
          </div>

          {/* ----------------------------- Below Container --------------------------------------- */}
          <div className="flex flex-col text-center w-full mb-5">
            {/* ---------------------------------Avatar Upadte and Remove Button----------------------- */}
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

            {/* -----------------------------Input Section 1--------------------------------------- */}
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2  text-left">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name :
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="off"
                      // defaultValue="Keval Shah"
                      defaultValue={userDetails.personname}
                      onChange={(e) =>
                        setUserDetails((prevState) => ({
                          ...prevState,
                          personname: e.target.value,
                        }))
                      }
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2 text-left">
                  <div className="relative">
                    <label
                      for="username"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Username :
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      autoComplete="off"
                      // defaultValue="keval_70"
                      defaultValue={userDetails.username}
                      onChange={(e) =>
                        setUserDetails((prevState) => ({
                          ...prevState,
                          username: e.target.value,
                        }))
                      }
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* -----------------------------Input Section 2--------------------------------------- */}
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2  text-left">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email :
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="off"
                      // defaultValue="kevalshah70410@gmail.com"
                      defaultValue={userDetails.email}
                      onChange={(e) =>
                        setUserDetails((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                        }))
                      }
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {/* <div className="p-2 w-1/2 text-left">
                  <div className="relative">
                    <label
                      for="password"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Password :
                    </label>
                    <input
                      type="text"
                      id="password"
                      name="password"
                      autoComplete="off"
                      defaultValue="Keval@123"
                      // defaultValue={userDetails.password}
                      // onChange={(e) =>
                      //   setUserDetails((prevState) => ({
                      //     ...prevState,
                      //     password: e.target.value,
                      //   }))
                      // }
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" //A form with a password field that must contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter:
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div> */}
              </div>
            </div>
            {/* ------------------------------ Save Button ----------------------------------------- */}
            <div className="p-2 w-full">
              <button
                onClick={updateUserProfile}
                // type="submit"
                className="flex mx-auto mt-5 text-white bg-blue-500 border-0 rounded-full py-2 px-8 focus:outline-none hover:bg-white rounded hover:text-[#4484CE]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerAccountSetting;
