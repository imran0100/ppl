import React, { useState, useEffect } from "react";
import "./AboutDatabasePage.css";
import { FaBook, FaSearch, FaList } from "react-icons/fa";
import axios from "axios";
function AboutDatabasePage() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [data, setData] = useState({});
  const[des1,setDes1]=useState([])
  const[des2,setDes2]=useState([])
  const[des3,setDes3]=useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://server.theultimateppl.com/api/v1/get_alldatabase"
        );
console.log(response.data.data[0],"yjk")
setDes1(response.data.data[0].sub_description1
  .split("*"))
  setDes2(response.data.data[0].sub_description2
    .split("*"))
    setDes3(response.data.data[0].sub_description3
      .split("*"))
        setData(response.data.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const section2Right = document.querySelector(".col-1");
      const section2Top = section2Right.offsetTop;
      const windowTop = window.scrollY + window.innerHeight;

      if (windowTop > section2Top) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(des1,"hyyyyyyyyy")
  // let dec=data.description.split('*')
  // console.log(dec,"gfrt")
  return (
    <div>
      <section>
        <h2 className={`section-heading ${shouldAnimate ? "active" : ""}`}>
          {data.heading}
        </h2>
        <p>{data.description}</p>

        <div className="row">
          <div className="col-1">
            <h3>{data.sub_head1}</h3>
            <div className="cl">
          
              <div className="icon">
                <FaBook className="icon-color" size={30} />
              </div>
              {/* {data.sub_description1} */}
              {des1.map((item)=><li>{item}</li>)}

            </div>
          </div>
          <div className="col-1">
            <h3>{data.sub_head2}</h3>
            <div className="cl">
              {" "}
              <div className="icon">
                <FaSearch className="icon-color" size={30} />
              </div>
              {/* {data.sub_description2} */}
              {des2.map((item)=><li>{item}</li>)}
            </div>
          </div>
          <div className="col-1">
            <h3>{data.sub_head3}</h3>
            <div className="cl">
              {" "}
              <div className="icon">
                <FaList className="icon-color" size={30} />
              </div>
              {/* {data.sub_description3} */}
              {des3.map((item)=><li>{item}</li>)}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutDatabasePage;
