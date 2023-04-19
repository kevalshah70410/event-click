import React from "react";
import bookingimg from "./Images/Payment.jpg";
import NavigationMenu from "./NavigationMenu";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function Payment() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <NavigationMenu />
      <section className="  min-h-screen flex items-center justify-center">
        {/* <!-- Booking container --> */}
        <div className="bg-cyan-500/20 flex rounded-2xl shadow-2xl shadow-cyan-500/20 lg:max-w-5xl p-5 m-[20px] mb-10  items-center group-active:scale-x-150">
          {/* <!-- image --> */}
          <div className="md:block hidden w-1/2">
            <img alt="BookigIg" className="rounded-2xl" src={bookingimg} />
          </div>

          {/* <!-- form --> */}

          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-cyan-800 lg:pl-10">
              Payment Process
            </h2>
            {/* <p className="text-xs mt-2 text-[#002D74]">
              Welcome to our platform.....
            </p> */}

            <form action="" className="flex flex-col gap-5 lg:pl-10">
              <div className="relative">
                <input
                  className="p-2 mt-8 rounded-xl border outline-none w-full  focus:border-cyan-500 duration-500"
                  type="text"
                  name="customername"
                  placeholder="Name on Card"
                />
              </div>
              <div className="relative">
                <input
                  className="p-2 rounded-xl border outline-none w-full focus:border-cyan-500 duration-500"
                  type="text"
                  name="cardnumber"
                  placeholder="Card Number"
                />
              </div>
              {/* <div className="relative">
                <input
                  className="p-2 rounded-xl border outline-none w-full"
                  type="text"
                  name="contactnumber"
                  placeholder="Contact Number"
                />
              </div> */}
              <div className="relative">
                <label className="float-left">Expire Date:</label>
                {/* <input
                    type="date"
                    id="Event Date"
                    name="Event Date"
                    placeholder="Expire Date"
                    className="p-2 rounded-xl border outline-none w-full text-gray-800/50 "
                  /> */}
                <div className="flex space-x-4 mt-10">
                  <select class="p-2 rounded-xl border outline-none w-full hover:cursor-pointer focus:border-cyan-500 duration-500">
                    <option value="" selected disabled hidden>
                      MM
                    </option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select class="p-2 rounded-xl border outline-none w-full hover:cursor-pointer focus:border-cyan-500 duration-500">
                    <option value="" selected disabled hidden>
                      YY
                    </option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <input
                  className="p-2 mt-2 rounded-xl border outline-none w-full focus:border-cyan-500 duration-500"
                  type="text"
                  name="customername"
                  placeholder="CVV"
                />
              </div>
              {/* <Link to={"/Paymentsuccess"}> */}
              <div className="bg-cyan-600 mt-5 w-full h-10  rounded-xl shadow-lg shadow-cyan-500/20 hover:bg-cyan-500 text-white py-1 hover:scale-105 duration-300">
                <Button
                  onClick={handleClickOpen}
                  // className="bg-cyan-600 mt-5 w-full rounded-xl shadow-lg shadow-cyan-500/20 hover:bg-cyan-500 text-white py-2 hover:scale-105 duration-300"
                >
                  <p className="text-white">Book</p>
                </Button>
              </div>
              <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  {"Success"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>Your Payment is Success</DialogContentText>
                </DialogContent>
                <DialogActions>
                  {/* <Button autoFocus onClick={handleClose}>
                    Disagree
                  </Button> */}
                  {/* <Link to={"/Home"}> */}
                  <Button onClick={handleClose} autoFocus>
                    Thank You
                  </Button>
                  {/* </Link> */}
                </DialogActions>
              </Dialog>
              {/* </Link> */}
              <Link to={"/Booking"}>
                <button className="bg-white -mt-2 mb-2 ring-cyan-500 ring-1 w-full rounded-xl shadow-lg shadow-cyan-500/20 hover:bg-cyan-500 text-cyan-600 py-2 hover:scale-105 hover:ring-0 hover:text-white duration-300">
                  Back
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payment;
