import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

// const cities = [
//   "Anand",
//   "Ahemdabad",
//   "Amreli",
//   "Bhavnagar",
//   "Jamnagar",
//   "Nadiad",
//   "Rajkot",
//   "Surat",
//   "Vadodara(Baroda)",
// ];
const areas = [
  "Bhuyangdev",
  "Gandhinagar",
  "Ghatlodiya",
  "Naranpura",
  "Naroda",
  "New Vadaj",
  "Sciencity",
  "Kalupur",
  "Sabarmati",
  // "Nadiad",
];
const categorys = ["Pre-Wedding", "Wedding", "Party"];
const experience = [
  "Start-Up",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10+",
];
const rating = ["0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"];
function getStyles(city, cityName, theme) {
  return {
    fontWeight:
      cityName.indexOf(city) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Dropdownsearch(props) {
  const theme = useTheme();
  // const [cityName, setCityName] = React.useState([]);
  const [areaName, setAreaName] = React.useState([]);
  const [categoryName, setCategoryName] = React.useState([]);
  const [experienceWise, setExperienceWise] = React.useState([]);
  const [ratingWise, setRatingWise] = React.useState([]);

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setCityName(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };






  
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setAreaName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    if (categoryName.length > 0 && experienceWise.length > 0) {
      const q = query(
        collection(db, "user"),
        where("area", "==", value),
        where("expertise", "==", categoryName[0]),
        where("experience", "==", Number(experienceWise[0]))
      );
      const arr = [];
      getDocs(q).then((user) => {
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().role != "user") {
            arr.push(doc.data());
            props.setPhotoGrapherList(arr);
          }
        });
      });
    } else if (categoryName.length > 0 && !experienceWise.length > 0) {
      const q = query(
        collection(db, "user"),
        where("area", "==", value),
        where("expertise", "==", categoryName[0])
      );
      const arr = [];
      getDocs(q).then((user) => {
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().role != "user") {
            arr.push(doc.data());
            props.setPhotoGrapherList(arr);
          }
        });
      });
    } else if (!categoryName.length > 0 && experienceWise.length > 0) {
      const q = query(
        collection(db, "user"),
        where("area", "==", value),
        where("experience", "==", Number(experienceWise[0]))
      );
      const arr = [];
      getDocs(q).then((user) => {
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().role != "user") {
            arr.push(doc.data());
            props.setPhotoGrapherList(arr);
          }
        });
      });
    } else {
      const q = query(collection(db, "user"), where("area", "==", value));
      const arr = [];
      getDocs(q).then((user) => {
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().role != "user") {
            arr.push(doc.data());
            props.setPhotoGrapherList(arr);
          }
        });
      });
    }
  };






  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event;

    setCategoryName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    if (areaName.length > 0 && experienceWise.length > 0) {
      const q = query(
        collection(db, "user"),
        where("expertise", "==", value),
        where("area", "==", areaName[0]),
        where("experience", "==", Number(experienceWise[0]))
      );
      const arr = [];
      getDocs(q).then((user) => {
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().role != "user") {
            arr.push(doc.data());
            props.setPhotoGrapherList(arr);
          }
        });
      });
    } else if (areaName.length > 0 && !experienceWise.length > 0) {
      const q = query(
        collection(db, "user"),
        where("expertise", "==", value),
        where("area", "==", areaName[0])
      );
      const arr = [];
      getDocs(q).then((user) => {
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().role != "user") {
            arr.push(doc.data());
            props.setPhotoGrapherList(arr);
          }
        });
      });
    } else if (!areaName.length > 0 && experienceWise.length > 0) {
      const q = query(
        collection(db, "user"),
        where("expertise", "==", value),
        where("experience", "==", Number(experienceWise[0]))
      );
      const arr = [];
      getDocs(q).then((user) => {
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().role != "user") {
            arr.push(doc.data());
            props.setPhotoGrapherList(arr);
          }
        });
      });
    } else {
      const q = query(collection(db, "user"), where("expertise", "==", value));
      const arr = [];
      getDocs(q).then((user) => {
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().role != "user") {
            arr.push(doc.data());
            props.setPhotoGrapherList(arr);
          }
        });
      });
      console.log(arr);
    }
  };





  const handleChange4 = (event) => {
    const {
      target: { value },
    } = event;
    debugger;
    setExperienceWise(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    if (areaName.length > 0 && categoryName.length > 0) {
      const q = query(
        collection(db, "user"),
        where("experience", "==", Number(value)),
        where("area", "==", areaName[0]),
        where("expertise", "==", categoryName[0])
      );
      const arr = [];
      getDocs(q).then((user) => {
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().role != "user") {
            arr.push(doc.data());
            props.setPhotoGrapherList(arr);
          }
        });
      });
    } else if (areaName.length > 0 && !categoryName.length > 0) {
      const q = query(
        collection(db, "user"),
        where("experience", "==", Number(value)),
        where("area", "==", areaName[0])
      );
      const arr = [];
      getDocs(q).then((user) => {
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().role != "user") {
            arr.push(doc.data());
            props.setPhotoGrapherList(arr);
          }
        });
      });
    } else if (!areaName.length > 0 && categoryName.length > 0) {
      const q = query(
        collection(db, "user"),
        where("experience", "==", Number(value)),
        where("expertise", "==", categoryName[0])
      );

      const arr = [];
      getDocs(q).then((user) => {
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().role != "user") {
            arr.push(doc.data());
            props.setPhotoGrapherList(arr);
          }
        });
        if (arr.length == 0) {
          props.setPhotoGrapherList(arr);
        }
      });
    } else {
      const q = query(
        collection(db, "user"),
        where("experience", "==", Number(value))
      );
      const arr = [];
      getDocs(q).then((user) => {
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().role != "user") {
            arr.push(doc.data());
            props.setPhotoGrapherList(arr);
          }
        });
        if (arr.length == 0) {
          props.setPhotoGrapherList(arr);
        }
      });
    }
  };

  const handleChange5 = (event) => {
    const {
      target: { value },
    } = event;

    setRatingWise(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    // if(areaName && categoryName){
    //   const q = query(collection(db, "user"), where("area", "==", value),where("expertise", "==", areaName),where("experience", "==", categoryName))
    // }
    // else if(areaName && !categoryName){
    //   const q = query(collection(db, "user"), where("area", "==", value),where("expertise", "==", areaName))
    // }
    // else if(!areaName && categoryName){
    //   const q = query(collection(db, "user"), where("area", "==", value),where("experience", "==", categoryName))
    // }
    // else{
    //   const q = query(collection(db, "user"), where("area", "==", value))
    // }
  };

  return (
    <div className="lg:ml-[200px]">
      {/* <FormControl sx={{ m: 2, width: 200, mt: 3 }}>
        <Select
          displayEmpty
          value={cityName}
          onChange={handleChange}
          input={<OutlinedInput />}
          className="bg-white shadow-lg shadow-white/30"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p>Select City</p>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <p>Select City</p>
          </MenuItem>
          {cities.map((cities) => (
            <MenuItem
              key={cities}
              value={cities}
              style={getStyles(cities, cityName, theme)}
            >
              {cities}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
      <FormControl sx={{ m: 2, width: 200, mt: 3 }}>
        <Select
          displayEmpty
          value={areaName}
          onChange={handleChange2}
          input={<OutlinedInput />}
          className="bg-white shadow-lg shadow-white/30"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p>Select Area</p>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <p>Select Area</p>
          </MenuItem>
          {areas.map((areas) => (
            <MenuItem
              key={areas}
              value={areas}
              style={getStyles(areas, areaName, theme)}
            >
              {areas}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 2, width: 200, mt: 3 }}>
        <Select
          displayEmpty
          value={categoryName}
          onChange={handleChange3}
          input={<OutlinedInput />}
          className="bg-white shadow-lg shadow-white/30"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p>Select Category</p>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <p>Select Category</p>
          </MenuItem>
          {categorys.map((category) => (
            <MenuItem
              key={category}
              value={category}
              style={getStyles(category, categoryName, theme)}
            >
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 2, width: 200, mt: 3 }}>
        <Select
          displayEmpty
          value={experienceWise}
          onChange={handleChange4}
          input={<OutlinedInput />}
          className="bg-white shadow-lg shadow-white/30"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p>Select Experience</p>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <p>Select Experience</p>
          </MenuItem>
          {experience.map((experience) => (
            <MenuItem
              key={experience}
              value={experience}
              style={getStyles(experience, experienceWise, theme)}
            >
              {experience}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 2, width: 200, mt: 3 }}>
        <Select
          displayEmpty
          value={ratingWise}
          onChange={handleChange5}
          input={<OutlinedInput />}
          className="bg-white shadow-lg shadow-white/30"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p>Select Rating</p>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <p>Select Rating</p>
          </MenuItem>
          {rating.map((rate) => (
            <MenuItem
              key={rate}
              value={rate}
              style={getStyles(rate, ratingWise, theme)}
            >
              {rate}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

// import React from "react";

// function Dropdownsearch() {
//   return (
//     <div>
//       <select className="w-[200px] h-10 outline-none text-gray-500  border-none">
//         <p>Selcet City</p>
//         <option value="city" disabled className="p-8">
//           City
//         </option>
//         <option value="city">City</option>
//       </select>
//     </div>
//   );
// }

// export default Dropdownsearch;
