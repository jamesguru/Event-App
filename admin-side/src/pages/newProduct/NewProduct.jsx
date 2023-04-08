import "./newProduct.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { useDispatch } from "react-redux";
import app from "../../firebasestore";
import { addProduct } from "../../redux/apiCalls";
import axios from "axios";
let Schedule = [];
var Pricing = [];

export default function NewProduct() {
  const [inputs, setInputs] = useState({});

  const [file, setFile] = useState(null);

  const [file2, setFile2] = useState(null);

  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);

  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const [cat, setCat] = useState([]);

  const [Itinenary, setItinenary] = useState("");
  const [addedItinenary, setAddedItinenary] = useState([]);
  const [day, setDay] = useState("");

  const [startDatePricing, setStartDatePricing] = useState("");
  const [lastDatePricing, setLastDatePricing] = useState("");
  const [pricingPrice1, setPricingPrice1] = useState(0);
  const [pricingPrice2, setPricingPrice2] = useState(0);
  const [pricingPrice3, setPricingPrice3] = useState(0);
  const [pricingPrice4, setPricingPrice4] = useState(0);
  const [pricingPrice5, setPricingPrice5] = useState(0);
  const [pricingPrice6, setPricingPrice6] = useState(0);

  const [room1, setRoom1] = useState(0);
  const [room2, setRoom2] = useState(0);
  const [room3, setRoom3] = useState(0);
  const [room4, setRoom4] = useState(0);
  const [room5, setRoom5] = useState(0);
  const [room6, setRoom6] = useState(0);

  const [accomodation, setAccomodation] = useState([]);

  const [gallery, setGallery] = useState([]);

  const [percentage, setpercentage] = useState(0);
  const [percentage1, setpercentage1] = useState(0);
  const [percentage2, setpercentage2] = useState(0);
  const [percentage3, setpercentage3] = useState(0);
  const [percentage4, setpercentage4] = useState(0);
  const [numberOfDays, setNumberofDays] = useState(0);
  const [numberOfPricing, setNumberOfPricing] = useState(0);
  const dispatch = useDispatch();

  const [uploading, setUploading] = useState("uploading is 0%");
  const [uploading1, setUploading1] = useState("uploading is 0%");
  const [uploading2, setUploading2] = useState("uploading is 0%");
  const [uploading3, setUploading3] = useState("uploading is 0%");
  const [uploading4, setUploading4] = useState("uploading is 0%");

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleDay = (e) => {
    setDay(e.target.value);
  };

  const handleItenenary = (e) => {
    setItinenary(e.target.value);
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleAddItenenary = (e) => {
    e.preventDefault();

    if (day && Itinenary) {
      const itinenaryItem = {
        day,
        Itinenary,
      };

      console.log(itinenaryItem);

      Schedule.push(itinenaryItem);

      setNumberofDays(Schedule.length);

      toast.success(`You have added Itinenary ${Schedule.length}`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setDay("");
      setItinenary("");
    } else {
      toast.warning(`Make sure you have fill in Itinenary`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handlePricing = (e) => {
    e.preventDefault();

    if (startDatePricing && lastDatePricing) {
      const pricingItem = {
        startdate: startDatePricing,
        lastdate: lastDatePricing,
        price1: {
          numberOfPeople: 1,
          price: pricingPrice1,
          room: room1,
        },
        price2: {
          numberOfPeople: 2,
          price: pricingPrice2,
          room: room2,
        },
        price3: {
          numberOfPeople: 3,
          price: pricingPrice3,
          room: room3,
        },
        price4: {
          numberOfPeople: 4,
          price: pricingPrice4,
          room: room4,
        },
        price5: {
          numberOfPeople: 5,
          price: pricingPrice5,
          room: room5,
        },
        price6: {
          numberOfPeople: 6,
          price: pricingPrice1,
          room: room6,
        },
      };

      console.log(pricingItem);

      Pricing.push(pricingItem);

      setNumberOfPricing(Pricing.length);
      setStartDatePricing("");
      setLastDatePricing("");
      setPricingPrice1(0);
      setPricingPrice2(0);
      setPricingPrice3(0);
      setPricingPrice4(0);
      setPricingPrice5(0);
      setPricingPrice6(0);

      toast.success(`You have added pricing ${Pricing.length}`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.warning(`Make sure you have fill all pricing fields.`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleAccomodation = (e) => {
    setAccomodation(e.target.value.split(","));
  };
  const handleGallery = (e) => {
    setGallery(e.target.value.split(","));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "uploads");

    setUploading("uploading");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",
        data
      );

      const { url } = uploadRes.data;

      setImage(url);

      setUploading("uploaded 100%");
    } catch (error) {
      console.log(error);

      setUploading("uploading failed");
    }
  };
  const handleUpload1 = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file2);
    data.append("upload_preset", "uploads");

    setUploading1("uploading");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",
        data
      );

      const { url } = uploadRes.data;

      setImage1(url);

      setUploading1("uploaded 100%");
    } catch (error) {
      console.log(error);

      setUploading1("uploading failed");
    }
  };

  const handleUpload2 = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file3);
    data.append("upload_preset", "uploads");

    setUploading2("uploading");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",
        data
      );

      const { url } = uploadRes.data;

      setImage2(url);

      setUploading2("uploaded 100%");
    } catch (error) {
      console.log(error);

      setUploading2("uploading failed");
    }
  };

  const handleUpload3 = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file4);
    data.append("upload_preset", "uploads");

    setUploading3("uploading");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",
        data
      );

      const { url } = uploadRes.data;

      setImage3(url);

      setUploading3("uploaded 100%");
    } catch (error) {
      console.log(error);

      setUploading3("uploading failed");
    }
  };
  const handleUpload4 = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file5);
    data.append("upload_preset", "uploads");

    setUploading4("uploading");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",
        data
      );

      const { url } = uploadRes.data;

      setImage4(url);

      setUploading4("uploaded 100%");
    } catch (error) {
      console.log(error);

      setUploading4("uploading failed");
    }
  };

  const handleUploadVideo = (e) => {
    e.preventDefault();

    const filename = new Date().getTime() + file2.name;

    const storage = getStorage(app);

    const StorageRef = ref(storage, filename);

    const uploadTask = uploadBytesResumable(StorageRef, file2);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setpercentage(progress);
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;

          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setVideo(downloadURL);
        });
      }
    );
  };

  const handleClick = (e) => {
    const Package = {
      ...inputs,
      video: video,
      img: image,
      img1: image1,
      img2: image2,
      img3: image3,
      img4: image4,
      categories: cat,
      schedule: Schedule,
      pricing: Pricing,
      accomodation: accomodation,
      gallery: gallery,
    };

    console.log(Package);
    e.preventDefault();

    addProduct(Package, dispatch);
    toast.success(`Package has been successfully uploaded`, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="newProduct">
      <h3>New Event</h3>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button onClick={handleUpload}>upload</button>

          <h4 style={{ color: "green" }}>{uploading}</h4>
        </div>

        <div className="addProductItem">
          <label>Video</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile2(e.target.files[0])}
          />
          <button onClick={handleUploadVideo}>upload</button>
          <h4 style={{ color: "teal" }}>{`File upload is ${percentage} %`}</h4>
        </div>
        <div className="addProductItem">
          <label>Event Title </label>
          <input
            type="text"
            name="title"
            placeholder="Mountain Hiking"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Description </label>
          <textarea
            name="desc"
            cols="40"
            rows="5"
            onChange={handleChange}
            placeholder="description"
          ></textarea>
        </div>

        <div className="addProductItem">
          <label>Price </label>
          <input
            name="originalPrice"
            type="number"
            placeholder="$88"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Duration</label>
          <input
            name="duration"
            type="text"
            placeholder="4 days"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Date</label>
          <input
            name="duration"
            type="date"
            placeholder="4 days"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Group Size </label>
          <input
            name="groupsize"
            type="number"
            placeholder="300"
            onChange={handleChange}
          />
        </div>

        <div className="addItem">
          <h5>Event Type </h5>

          <div className="item">
            <span>Physical</span>
          <input
            name="category"
            type="checkbox"
            placeholder="family-holidays,tanzania"
            onChange={handleCat}
          />
          </div>
          <div className="item">
            <span>Online</span>
          <input
            name="category"
            type="checkbox"
            placeholder="family-holidays,tanzania"
            onChange={handleCat}
          />
          </div>
          <div className="item">
            <span>Webinar</span>
          <input
            name="category"
            type="checkbox"
            placeholder="family-holidays,tanzania"
            onChange={handleCat}
          />
          </div>
          <div className="item">
            <span>Blended</span>
          <input
            name="category"
            type="checkbox"
            placeholder="family-holidays,tanzania"
            onChange={handleCat}
          />
          </div>
         
        </div>
        <div className="addItem">
          <h5>Category </h5>

          <div className="item">
            <label htmlFor="">Physical</label>
            <input
            name="category"
            type="checkbox"
            placeholder="family-holidays,tanzania"
            onChange={handleCat}
          />
          </div>
          <div className="item">
            <label htmlFor="">Online</label>
            <input
            name="category"
            type="checkbox"
            placeholder="family-holidays,tanzania"
            onChange={handleCat}
          />
          </div>
          <div className="item">
            <label htmlFor="">Webinar</label>
            <input
            name="category"
            type="checkbox"
            placeholder="family-holidays,tanzania"
            onChange={handleCat}
          />
          </div>
          <div className="item">
            <label htmlFor="">Popular</label>
            <input
            name="category"
            type="checkbox"
            placeholder="family-holidays,tanzania"
            onChange={handleCat}
          />
          </div>
          <div className="item">
            <label htmlFor="">Blended</label>
            <input
            name="category"
            type="checkbox"
            placeholder="family-holidays,tanzania"
            onChange={handleCat}
          />
          </div>
          <div className="item">
            <label htmlFor="">Educational</label>
            <input
            name="category"
            type="checkbox"
            placeholder="family-holidays,tanzania"
            onChange={handleCat}
          />
          </div>
          <div className="item">
            <label htmlFor="">Entertain</label>
            <input
            name="category"
            type="checkbox"
            placeholder="family-holidays,tanzania"
            onChange={handleCat}
          />
          </div>
        </div>

        <hr />

        <div className="addProductItem">
          <label>Schedule </label>
          <span className="itinenary">Schedule {numberOfPricing} Added</span>

          <div className="pricing-card">
            <div className="pricing-item">
              <span>Enter start time for event</span>

              <input
                name="startdatepricing"
                type="text"
                placeholder="08:00AM"
                value={startDatePricing}
                onChange={(e) => setStartDatePricing(e.target.value)}
              />
            </div>

            <div className="pricing-item">
              <span>Enter last time for event</span>

              <input
                name="lastdatepricing"
                type="text"
                placeholder="10:00AM"
                value={lastDatePricing}
                onChange={(e) => setLastDatePricing(e.target.value)}
              />
            </div>
            <div className="pricing-item">
              <span>Activity</span>

              <textarea
                name="activity"
                type="text"
                placeholder="Welcoming the guests."
                value={lastDatePricing}
                onChange={(e) => setLastDatePricing(e.target.value)}
                className="activity"
              />
            </div>


           </div>
          <button onClick={handlePricing}>add schedule</button>
          <hr />
        </div>
        
        <div className="addProductItem">
          <label>Gallery Images</label>

          <label>Image 1</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile2(e.target.files[0])}
          />

          <button onClick={handleUpload1}>upload</button>
          <h4 style={{ color: "green" }}>{uploading1}</h4>

          <label>Image 2</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile3(e.target.files[0])}
          />

          <button onClick={handleUpload2}>upload</button>
          <h4 style={{ color: "green" }}>{uploading2}</h4>

          <label>Image 3</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile4(e.target.files[0])}
          />

          <button onClick={handleUpload3}>upload</button>
          <h4 style={{ color: "green" }}>{uploading3}</h4>
          <label>Image 4</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile5(e.target.files[0])}
          />

          <button onClick={handleUpload4}>upload</button>
          <h4 style={{ color: "green" }}>{uploading4}</h4>
        </div>

        <div className="addProductItem">
          <label>Active</label>
          <select name="active" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
