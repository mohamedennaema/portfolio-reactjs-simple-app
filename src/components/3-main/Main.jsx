import { useEffect, useState } from "react";
import "./main.css";

import { AnimatePresence, motion } from "framer-motion";


const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  
  const [projectData, setProjectData] = useState([]);
  const [arr, setArr] = useState([]);
  const    fetchData= async()=> {
    await fetch("https://projectportofoli.s3.eu-north-1.amazonaws.com/exemple.json", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    }).then((resp)=>resp.json()).then((data)=>{
      setProjectData(data)
      setArr(data)
    })
  
      
      
}
  useEffect(() => {
 fetchData()
},[]);



 
  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = projectData.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex" id="project">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(projectData);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("springboot");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          SPRING BOOT & REACTJS
        </button>

        <button
          onClick={() => {
            handleClick("reactjs");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          REACT JS
        </button>
        <button
          onClick={() => {
            handleClick("django");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          DJANGO 
        </button>
        
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.a
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card"
                href={item.linkwebsite}
              >
              

                <div style={{ width: "266px" }} className="box">
                  <div>
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                   {item.desc}
                  </p>
                  </div>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      
                      <div className="icon-github">
                      <a href={item.linkgithub} class="fa fa-github"></a>
                      </div>
                    </div>

                    <a  className="link flex" href={item.linkwebsite}>
                      show
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
